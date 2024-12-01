/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import Markdown from "react-markdown";
import { clearCache } from "@/actions/commonAction";
import SummarizeLoader from "./SummaryLoadr";

export default function SummaryBase({
  summary,
}: {
  summary: SummaryType | null;
}) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState("");

  useEffect(() => {
    if (summary?.response) {
      setResponse(summary?.response!);
      setLoading(false);
    } else {
      summarize();
    }
  }, [summary]);

  const summarize = async () => {
    try {
      if (response.length > 0) {
        setLoading(false);
        return true;
      }
      const { data } = await axios.post("/api/summarize", {
        url: summary?.url,
        id: summary?.id,
      });
      setLoading(false);
      const res = data?.data;
      if (res) {
        setResponse(res);
        clearCache("userCoins");
        clearCache("coinsSpend");
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        if ([500, 401, 400].includes(error.response?.status!)) {
          toast.error(error.response?.data?.message);
        } else {
          toast.error("Something not right!");
        }
      }
    }
  };

  return (
    <div className="flex items-center flex-col w-full">
      <h1 className="text-2xl font-bold my-4">{summary?.title}</h1>
      {loading && <SummarizeLoader />}
      {response && (
        <div className="w-full md:w-[700px] rounded-lg bg-slate-100 shadow-md p-8">
          <Markdown>{response}</Markdown>
        </div>
      )}
    </div>
  );
}
