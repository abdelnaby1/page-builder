"use client";
import { IBanner, ICategories, IProducts } from "@/interfaces";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

import { Badge } from "../ui/badge";
import { capitalizeEveryWord } from "@/lib/utils";
interface Iprops {
  products: IProducts;
}
const ProductsCard = ({ products }: Iprops) => {
  const products_ids = products.productsData?.products_ids;
  const category_id = products.productsData?.category_id;
  return (
    <Card className="mb-2 ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Badge className="w-fit">
            {capitalizeEveryWord(products.type.replace(/_/g, " "))}
          </Badge>
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="p-0"></CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full flex items-center justify-between self-start">
          <p className="text-sm ">Displayed Enlgish Name:</p>
          <Badge variant={"secondary"}>{products.productsData?.name_en}</Badge>
        </div>
        <div className="w-full flex items-center justify-between self-start">
          <p className="text-sm "> Displayed Arabic Name:</p>
          <Badge variant={"secondary"}>{products.productsData?.name_ar}</Badge>
        </div>
        {category_id && (
          <div className="w-full flex items-center justify-between self-start">
            <p className="text-sm ">Category ID:</p>
            <Badge variant={"secondary"}>{category_id}</Badge>
          </div>
        )}
        {products_ids && (
          <div className="w-full flex items-center justify-between self-start">
            <p className="text-sm ">Products IDs:</p>
            <Badge variant={"secondary"}>
              [
              {products_ids.map((id: number, idx: number) => {
                return idx === products_ids?.length - 1 ? (
                  <span key={id}>{`${id}`}</span>
                ) : (
                  <span key={id}>{`${id}, `}</span>
                );
              })}
              ]
            </Badge>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
export default ProductsCard;
