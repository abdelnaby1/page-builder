"use server";

import { getAllCategoriesAction } from "@/actions/categories.actions";
import CategoriesForm from "@/components/forms/categories";
import CategoriesList from "@/components/list/CategoriesList";

import React from "react";

export default async function Page() {
  const categories = await getAllCategoriesAction();

  return (
    <div className="container mt-3">
      <CategoriesForm />
      <div>
        <CategoriesList categories={categories} />
      </div>
    </div>
  );
}
