import { BannerForm } from "@/components/forms/banner/BannerForm";
import { ProductForm } from "@/components/forms/product/ProductForm";
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

const page = () => {
  return (
    <div className="container mt-3">
      <div className="text-right mb-3">
        <Sheet>
          <SheetTrigger className={buttonVariants()}>
            <Plus size={16} className="mr-1" />
            New Products Widget
          </SheetTrigger>
          <SheetContent side={"bottom"} className="overflow-y-auto ">
            <SheetHeader>
              <SheetTitle className="text-center mt-4">
                Products Form
              </SheetTitle>
              <SheetDescription className="text-center">
                Here you can create Categories Widget to be shown in your app.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-fit items-center pt-3">
              <ProductForm />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default page;
