import DashNav from "@/components/dashboard/DashNav";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { getUserCoins } from "@/actions/userDetailsAction";
import UrlInput from "@/components/dashboard/UrlInput";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);
  const userCoins = await getUserCoins(session?.user?.id ?? "");
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <DashNav user={session?.user} userCoins={userCoins ?? null} />
      <UrlInput user={session?.user} />
    </div>
  );
}
