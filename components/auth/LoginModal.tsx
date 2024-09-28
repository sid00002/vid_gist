"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginModal({
  isLoginOpen,
  setIsLoginOpen,
}: {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleGoogleLogin = async () => {
    signIn("google", {
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-gray-100 border-gray-100 hover:bg-gray-800"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 text-gray-100 border-gray-700">
        <DialogHeader>
          <DialogTitle>Login to Your Account</DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your email and password to access your account.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <Button
                variant="outline"
                onClick={handleGoogleLogin}
                className="w-full"
              >
                <Image
                  src="/images/google.png"
                  className=" mr-4"
                  width={25}
                  height={25}
                  alt="google"
                />
                Continue with Google
              </Button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            Log In
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
