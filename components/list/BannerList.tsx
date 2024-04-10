import { IBanner } from "@/interfaces";
import React from "react";
import BannerCard from "../cards/BannerCard";
interface Iprops {
  banners: IBanner[];
}
const BannerList = ({ banners }: Iprops) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
      {banners.length > 0 ? (
        banners.map((banner) => <BannerCard key={banner.id} banner={banner} />)
      ) : (
        <h1>No Banners Available</h1>
      )}
    </div>
  );
};

export default BannerList;
