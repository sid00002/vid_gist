"use client";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { CreditCard, History, LogOut, UserCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Suspense, useState } from "react";
import dynamic from "next/dynamic";

const LoginModal = dynamic(() => import("../auth/LogoutModal"));

export default function ProfileDropDown({
  user,
}: {
  user?: CustomUser | null;
}) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      {isLoginOpen && (
        <Suspense fallback={<p>Loading....</p>}>
          <LoginModal
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen}
          />
        </Suspense>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <UserAvatar
              image={user?.image ?? undefined}
              name={user?.name ?? ""}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 bg-gray-800 text-gray-100 border-gray-700"
        >
          <DropdownMenuItem className="focus:bg-gray-700 focus:text-gray-100">
            <UserCircle className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-gray-700 focus:text-gray-100">
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Coins Spend</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-gray-700 focus:text-gray-100">
            <History className="mr-2 h-4 w-4" />
            <span>Transactions</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-700" />
          <DropdownMenuItem
            className="focus:bg-gray-700 focus:text-gray-100"
            onClick={() => setIsLoginOpen(true)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
