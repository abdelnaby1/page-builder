"use server";

import { getAllProductsAction } from "@/actions/products.actions";
import ProductForm from "@/components/forms/product";
import ProductsList from "@/components/list/ProductsList";
import React from "react";

export default async function Page() {
  {
    const products = await getAllProductsAction();

    return (
      <div className="container mt-3">
        <ProductForm />
        <div>
          <ProductsList products={products} />
        </div>
      </div>
    );
  }
}
