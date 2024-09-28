"use client";
import { Youtube } from "lucide-react";
import LoginModal from "../auth/LoginModal";
import { useState } from "react";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar({ user }: { user?: CustomUser }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  console.log(user);
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Youtube className="h-8 w-8 text-red-500" />
        <span className="text-2xl font-bold">VidGist</span>
      </div>
      {user ? (
        <div className="space-x-4">
          <Button variant="ghost">Pricing</Button>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        </div>
      ) : (
        <LoginModal isLoginOpen={isLoginOpen} setIsLoginOpen={setIsLoginOpen} />
      )}
    </header>
  );
}
