"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import { useRouter } from "next/navigation";

export default function UrlInput({ user }: { user?: CustomUser }) {
  const [url, setUrl] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setLoading(true);

      const { data } = await axios.post("/api/add-url", {
        url: url,
        user_id: user?.id,
      });
      const summary: SummaryType = data?.data;
      if (summary) {
        toast.success("URL is correct, redirecting you to summarized page");
        router.push(`summarize/?id=${summary.id}`);
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          setErrors(error?.response?.data?.errors);
        } else {
          toast.error(error?.request?.data?.message);
        }
      }
    }
  };
  return (
    <main className="flex-grow flex items-center justify-center px-4">
      <div className="w-full max-w-2xl space-y-4 mt-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="relative flex-grow">
            <Input
              type="url"
              placeholder="Paste YouTube URL here"
              className="w-full bg-gray-800 text-gray-100 border-gray-700 focus:border-gray-500 pr-10"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              disabled={loading}
            />
            {loading && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
              </div>
            )}
          </div>
          <Button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white sm:w-auto"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Summary"}
          </Button>
          <span className="text-red-500">{errors}</span>
        </form>
      </div>
    </main>
  );
}
