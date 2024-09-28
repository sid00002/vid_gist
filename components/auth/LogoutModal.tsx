"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutModal({
  isLoginOpen,
  setIsLoginOpen,
}: {
  isLoginOpen: boolean;
  setIsLoginOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleGoogleLogout = async () => {
    signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <AlertDialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
      <AlertDialogContent className="bg-gray-800 text-gray-100 border-gray-700">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-400">
            This action will end your current session. You will need to log in
            again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-gray-700 text-gray-100 hover:bg-gray-600 focus:ring-gray-400">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleGoogleLogout}
            className="bg-red-600 text-white hover:bg-red-700 focus:ring-red-400"
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
