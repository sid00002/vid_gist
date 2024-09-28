import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import React from "react";
import ProfileDropDown from "../common/ProfileDropDown";
import { Coins, Youtube } from "lucide-react";

export default function DashNav({
  user,
  userCoins,
}: {
  user?: CustomUser;
  userCoins: CoinsType | null;
}) {
  return (
    <div>
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Youtube className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold">VidGist</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Coins className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">{userCoins?.coins}</span>
              </div>
              <ProfileDropDown user={user} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        {/* Add your dashboard content here */}
        <p className="text-gray-400">
          Welcome to your YouTube Summarizer dashboard. Start summarizing videos
          to earn more coins!
        </p>
      </main>
    </div>
  );
}
