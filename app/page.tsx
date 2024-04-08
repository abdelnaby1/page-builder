import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const types = ["products"];
export default function Home() {
  return (
    <main className="container w-3/4">
      <Link href={"/create"}>
        <Button>New Widget</Button>
      </Link>
    </main>
  );
}
