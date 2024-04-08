import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-4">
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
