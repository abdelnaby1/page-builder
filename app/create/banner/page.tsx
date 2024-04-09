import { getAllBannersAction } from "@/actions/banner.actions";
import { BannerForm } from "@/components/forms/banner/BannerForm";
import BannerList from "@/components/list/BannerList";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import React from "react";

export default async function page() {
  const banners = await getAllBannersAction();

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen min-w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={30}>
        <h2 className="flex items-center justify-center scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0">
          Banner Form
        </h2>
        <div className="flex flex-col h-full items-center pt-3 px-6">
          <BannerForm />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        <h2 className="flex items-center justify-center scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0">
          All Banners in your app
        </h2>
        <div className="flex flex-col h-full items-center pt-3 px-6">
          <BannerList banners={banners} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
