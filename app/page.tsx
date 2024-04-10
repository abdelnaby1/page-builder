"use server";

import { getWidgetsAction } from "@/actions/global.actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default async function Home() {
  const widgets = await getWidgetsAction();
  console.log("all widgets ", widgets);

  return (
    <main className="container w-3/4">
      <div className=" container flex items-center justify-center space-x-2">
        {/* <Link href={"/banner"}>
          <Button>Banner</Button>
        </Link>
        <Link href={"/slider"}>
          <Button>Slider</Button>
        </Link>
        <Link href={"/products"}>
          <Button>Products</Button>
        </Link>
        <Link href={"categories"}>
          <Button>Categories</Button> */}
        {/* </Link> */}
      </div>
    </main>
  );
}
