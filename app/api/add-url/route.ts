import { getUserCoins } from "@/actions/userDetailsAction";
import { summarySchema } from "@/validations/summaryValidations";
import vine, { errors } from "@vinejs/vine";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { YoutubeLoader } from "@langchain/community/document_loaders/web/youtube";
import { Document } from "@langchain/core/documents";
import prisma from "@/lib/db.config";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req });
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorised User" },
        { status: 401 }
      );
    }
    const body = await req.json();
    const validator = vine.compile(summarySchema);

    const payload = await validator.validate(body);
    const userCoins = await getUserCoins(payload.user_id);
    if (userCoins === null || (userCoins?.coins && userCoins?.coins < 10)) {
      return NextResponse.json(
        {
          message: "You dont have sufficient coins. Please add more coins",
        },
        { status: 400 }
      );
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let text: Document<Record<string, any>>[];
    try {
      const loader = YoutubeLoader.createFromUrl(payload.url, {
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

    const summary = await prisma.summary.create({
      data: {
        ...payload,
        user_id: Number(payload.user_id),
        title: text[0].metadata?.title ?? "404 Title not found",
      },
    });
    return NextResponse.json({
      message: "URL added successfully",
      data: summary,
    });
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        {
          message: "Please check the validations",
          errors: error.message,
        },
        { status: 422 }
      );
    }
    return NextResponse.json(
      {
        message: "Something went wrong. Please try again",
      },
      { status: 500 }
    );
  }
}
