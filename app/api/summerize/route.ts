import { NextRequest, NextResponse } from "next/server";
import { authOptions, CustomSession } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserCoins } from "@/actions/userDetailsAction";
import prisma from "@/lib/db.config";
import { coinsSpend, minusCoins, updateSummary } from "@/actions/commonAction";
import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import { TokenTextSplitter } from "@langchain/textsplitters";
import { Document } from "@langchain/core/documents";
import { PromptTemplate } from "@langchain/core/prompts";
import { summaryTemplate } from "@/lib/prompt";
import { loadSummarizationChain } from "langchain/chains";
import { gptModel } from "@/lib/langchain";
interface SummerizePayload {
  url: string;
  id: string;
}

export async function POST(req: NextRequest) {
  try {
    const session: CustomSession | null = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { message: "Unauthorised User" },
        { status: 401 }
      );
    }
    const body: SummerizePayload = await req.json();
    const userCoins = await getUserCoins(session?.user?.id ?? "");
    if (userCoins === null || (userCoins?.coins && userCoins?.coins < 10)) {
      return NextResponse.json(
        {
          message: "You dont have sufficient coins. Please add more coins",
        },
        { status: 400 }
      );
    }

    const oldSummary = await prisma.summary.findFirst({
      select: {
        response: true,
      },
      where: {
        url: body.url,
      },
    });
    if (oldSummary !== null && oldSummary.response) {
      await minusCoins(session?.user?.id ?? "");
      await coinsSpend(session?.user?.id ?? "", body.id);
      return NextResponse.json({
        message: "Podcast video summary",
        data: oldSummary?.response,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let text: Document<Record<string, any>>[];
    try {
      const loader = YoutubeLoader.createFromUrl(body.url, {
        language: "en",
        addVideoInfo: true,
      });

      text = await loader.load();
    } catch (error) {
      return NextResponse.json(
        { message: "No transscript found for this video. try another video" },
        { status: 404 }
      );
    }

    const splitter = new TokenTextSplitter({
      chunkSize: 10000,
      chunkOverlap: 250,
    });
    const docsSummary = await splitter.splitDocuments(text);
    const summaryPrompt = PromptTemplate.fromTemplate(summaryTemplate);
    const summaryChain = loadSummarizationChain(gptModel, {
      type: "map_reduce",
      verbose: true,
      combinePrompt: summaryPrompt,
    });

    const res = await summaryChain.invoke({
      input_doduments: docsSummary,
    });
    await minusCoins(session?.user?.id ?? "");
    await coinsSpend(session?.user?.id ?? "", body.id);
    await updateSummary(res?.text, body.id);

    return NextResponse.json({
      message: "Podcast Summary",
      data: res,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again",
      },
      { status: 500 }
    );
  }
}
