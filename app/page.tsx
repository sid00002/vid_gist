import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/layout/HeroSection";
import Navbar from "@/components/layout/Navbar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function App() {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Navbar user={session?.user} />
      <HeroSection />
      <Footer />
    </div>
  );
}
