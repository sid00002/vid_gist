import { getSummary } from "@/actions/userDetailsAction";
import { notFound } from "next/navigation";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  if (!searchParams?.id) {
    return notFound();
  }
  const summary = await getSummary(searchParams?.["id"]);
  if (!summary) {
    return notFound();
  }
  return <div>page</div>;
}
