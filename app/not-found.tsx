import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, Youtube } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Youtube className="h-8 w-8 text-red-500" />
          <span className="text-2xl font-bold">VidGist</span>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4">
        <div className="max-w-md w-full space-y-8 text-center">
          <AlertTriangle className="mx-auto h-24 w-24 text-yellow-500" />
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-xl text-gray-400">
            Oops! The page you are looking for doesnt exist or has been moved.
          </p>
          <div className="pt-4">
            <Link href="/" passHref>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-500">
        © 2023 VidGist. All rights reserved.
      </footer>
    </div>
  );
}
