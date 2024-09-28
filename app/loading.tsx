import { Youtube } from "lucide-react";

export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-8 relative">
          <Youtube className="h-16 w-16 text-red-500 animate-bounce" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-red-500 rounded-full animate-pulse" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Summarizing Video</h1>
        <p className="text-gray-400">
          Please wait while we process your request...
        </p>
        <div className="mt-8 flex justify-center items-center space-x-2">
          <div
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}
