import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className=" container flex items-center justify-center space-x-2">
      <Link href={"/create/banner"}>
        <Button>Banner</Button>
      </Link>
      <Link href={"/create"}>
        <Button>Slide</Button>
      </Link>
      <Link href={"/create"}>
        <Button>Products</Button>
      </Link>
      <Link href={"/create"}>
        <Button>Categories</Button>
      </Link>
    </div>
  );
};

export default page;
