import { getAllBannersAction } from "@/actions/banner.actions";
import BannerForm from "@/components/forms/banner";
import BannerList from "@/components/list/BannerList";

import React from "react";

export default async function page() {
  const banners = await getAllBannersAction();

  return (
    <div className="container mt-3">
      {/* <div className="flex items-center justify-center space-x-4 scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0"> */}
      <BannerForm />
      {/* </div> */}
      <div>
        <BannerList banners={banners} />
      </div>
    </div>
  );
}
