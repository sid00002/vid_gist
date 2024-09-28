import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HeroSection() {
  return (
    <main className="flex-grow flex items-center justify-center px-4">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Summarize YouTube Videos in Seconds
        </h1>
        <p className="text-xl text-center text-gray-400">
          Paste a YouTube URL and get an instant summary of the video content.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Input
            type="url"
            placeholder="Paste YouTube URL here"
            className="flex-grow bg-gray-800 text-gray-100 border-gray-700 focus:border-gray-500"
          />
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            Generate Summary
          </Button>
        </div>
      </div>
    </main>
  );
}
