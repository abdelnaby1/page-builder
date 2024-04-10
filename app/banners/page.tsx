import { getAllBannersAction } from "@/actions/banner.actions";
import { BannerForm } from "@/components/forms/banner/BannerForm";
import BannerList from "@/components/list/BannerList";
import { buttonVariants } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
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

export default async function page() {
  const banners = await getAllBannersAction();

  return (
    <div className="container mt-3">
      {/* <div className="flex items-center justify-center space-x-4 scroll-m-20 border-b py-2 text-3xl font-semibold tracking-tight first:mt-0"> */}
      <div className="text-right mb-3">
        <Sheet>
          <SheetTrigger className={buttonVariants()}>
            <Plus size={16} className="mr-1" />
            New Banner
          </SheetTrigger>
          <SheetContent className="overflow-y-auto  min-w-[450px] ">
            <SheetHeader>
              <SheetTitle className="text-center mt-4">Banner Form</SheetTitle>
              <SheetDescription>
                Here you can create just a default Banner or Banner that will
                reference to someting in your app.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full items-center pt-3 px-6">
              <BannerForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
      {/* </div> */}
      <div>
        <BannerList banners={banners} />
      </div>
    </div>
  );
}
