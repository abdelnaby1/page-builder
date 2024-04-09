"use server";

import { getWidgetsAction } from "@/actions/global.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
  const widgets = await getWidgetsAction();
  console.log("all widgets ", widgets);

  return (
    <main className="container w-3/4">
      <Link href={"/create"}>
        <Button>New Widget</Button>
      </Link>
    </main>
  );
}
