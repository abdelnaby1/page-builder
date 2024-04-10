"use client";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Link
          href={"/banners"}
          className={`${
            pathname === "/banners"
              ? "text-foreground"
              : "text-muted-foreground"
          }  transition-colors hover:text-foreground`}
        >
          Banners
        </Link>
        <Link
          href={"/sliders"}
          className={`${
            pathname === "/sliders"
              ? "text-foreground"
              : "text-muted-foreground"
          }  transition-colors hover:text-foreground`}
        >
          Sliders
        </Link>
        <Link
          href={"/products"}
          className={`${
            pathname === "/products"
              ? "text-foreground"
              : "text-muted-foreground"
          }  transition-colors hover:text-foreground`}
        >
          Products
        </Link>
        <Link
          href="/categories"
          className={`${
            pathname === "/categories"
              ? "text-foreground"
              : "text-muted-foreground"
          }  transition-colors hover:text-foreground`}
        >
          Categories
        </Link>
        <Link
          href={"/settings"}
          className={`${
            pathname === "/settings"
              ? "text-foreground"
              : "text-muted-foreground"
          }  transition-colors hover:text-foreground`}
        >
          Settings
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            <Link
              href={"/banners"}
              className={`${
                pathname === "/banners"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-foreground`}
            >
              Banners
            </Link>
            <Link
              href={"/sliders"}
              className={`${
                pathname === "/sliders"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-foreground`}
            >
              Sliders
            </Link>
            <Link
              href={"/products"}
              className={`${
                pathname === "/products"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-foreground`}
            >
              Products
            </Link>
            <Link
              href={"/categories"}
              className={`${
                pathname === "/categories"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-foreground`}
            >
              Categories
            </Link>
            <Link
              href={"/settings"}
              className={`${
                pathname === "/settings"
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-foreground`}
            >
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search Widgets..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link href={"#"}>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
            </Link>
            <DropdownMenuSeparator />
            <Link href={"/settings"}>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </Link>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    // <nav className="flex items-center justify-between py-4 border-b">
    //   <div className="container flex items-center ">
    //     <div className="">
    //       <ModeToggle />
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
