import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 border-b">
      <div className="container flex items-center ">
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
