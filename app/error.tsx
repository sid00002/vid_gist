"use client";
import { Button } from "@/components/ui/button";
import { Youtube, RefreshCw, Home, AlertOctagon } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Youtube className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold">YT Summarizer</span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <AlertOctagon className="mx-auto h-24 w-24 text-red-500" />
          <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>
          <p className="text-xl text-gray-400">
            We are sorry, but we encountered an unexpected error. Dont worry,
            its not your fault!
          </p>
          <div className="pt-4 space-y-4">
            <Button
              onClick={handleRefresh}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh Page
            </Button>
            <Link href="/" passHref>
              <Button
                variant="outline"
                className="w-full text-gray-100 border-gray-100 hover:bg-gray-800"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        © 2023 YT Summarizer. All rights reserved.
      </footer>
    </div>
  );
}
