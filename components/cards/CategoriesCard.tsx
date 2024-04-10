"use client";
import { IBanner, ICategories } from "@/interfaces";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";
import { Badge } from "../ui/badge";
import { capitalizeEveryWord } from "@/lib/utils";
interface Iprops {
  categories: ICategories;
}
const CategoriesCard = ({ categories }: Iprops) => {
  const categories_ids = categories.categoriesData?.categories_ids;
  return (
    <Card className="mb-2 ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Badge className="w-fit">
            {capitalizeEveryWord(categories.type.replace(/_/g, " "))}
          </Badge>
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="p-0"></CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full flex items-center justify-between self-start">
          <p className="text-sm ">Displayed Enlgish Name:</p>
          <Badge>{categories.categoriesData?.name_en}</Badge>
        </div>
        <div className="w-full flex items-center justify-between self-start">
          <p className="text-sm "> Displayed Arabic Name:</p>
          <Badge>{categories.categoriesData?.name_ar}</Badge>
        </div>
        {categories_ids && (
          <div className="w-full flex items-center justify-between self-start">
            <p className="text-sm "> Categories IDs:</p>
            <Badge>
              {" "}
              [
              {categories_ids.map((id: number, idx: number) => {
                return idx === categories_ids?.length - 1 ? (
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
export default CategoriesCard;
