"use client";
import { IBanner } from "@/interfaces";
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
interface Iprops {
  banner: IBanner;
}
const BannerCard = ({ banner }: Iprops) => {
  const imgs = [
    banner.bannerData?.url_en as string,
    banner.bannerData?.url_ar as string,
  ];

  console.log(banner.bannerData?.ref_id);

  return (
    <Card className="mb-2 ">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <Badge className="w-fit">{banner.bannerData?.ref_type}</Badge>

          {banner.bannerData?.ref_id && (
            <div className="flex items-center">
              <p className="text-sm ">
                Referenced {banner.bannerData?.ref_type} ID:
              </p>
              <Badge className="ml-2">{banner.bannerData?.ref_id}</Badge>
            </div>
          )}
        </CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="p-0">
        <Carousel className="w-full ">
          <CarouselContent>
            {imgs.map((img, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Image
                    src={img}
                    alt={banner?.bannerData?.name_en as string}
                    width={900}
                    height={400}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="w-full flex items-center justify-between self-start">
          <p className="text-sm ">Displayed Enlgish Name:</p>
          <Badge>{banner.bannerData?.name_en}</Badge>
        </div>
        <div className="w-full flex items-center justify-between self-start">
          <p className="text-sm "> Displayed Arabic Name:</p>
          <Badge>{banner.bannerData?.name_ar}</Badge>
        </div>
      </CardFooter>
    </Card>
  );
};
export default BannerCard;
