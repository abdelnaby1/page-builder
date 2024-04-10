"use server";

import { getAllCategoriesAction } from "@/actions/categories.actions";
import { CategoriesForm } from "@/components/forms/categories/CategoriesForm";
import CategoriesList from "@/components/list/CategoriesList";
import { buttonVariants } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import React from "react";

export default async function Page() {
  const categories = await getAllCategoriesAction();
  // console.log("categories", categories);

  return (
    <div className="container mt-3">
      <div className="text-right mb-3">
        <Sheet>
          <SheetTrigger className={buttonVariants()}>
            <Plus size={16} className="mr-1" />
            New Categories Widget
          </SheetTrigger>
          <SheetContent className="overflow-y-auto  min-w-[450px]">
            <SheetHeader>
              <SheetTitle className="text-center mt-4">
                Categories Form
              </SheetTitle>
              <SheetDescription className="text-center">
                Here you can create Categories Widget to be shown in your app.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-fit items-center pt-3">
              <CategoriesForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div>
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}
