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
      <CategoriesForm />
      <div>
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}
