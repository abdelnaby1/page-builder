"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ByCategoryIdForm } from "./ByCategoyId";
import { ByProductsIdsForm } from "./ByProductsIds";
import { GeneralProductsForm } from "./GeneralProducts";
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
import { useState } from "react";

export default function Product() {
  const [isIpen, setIsOpen] = useState(false);
  return (
    <div className="text-right mb-3">
      <Sheet open={isIpen} onOpenChange={setIsOpen}>
        <SheetTrigger className={buttonVariants()}>
          <Plus size={16} className="mr-1" />
          New Products Widget
        </SheetTrigger>
        <SheetContent side={"bottom"} className="overflow-y-auto ">
          <SheetHeader>
            <SheetTitle className="text-center mt-4">Products Form</SheetTitle>
            <SheetDescription className="text-center">
              Here you can create Products Widget to be shown in your app.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-fit items-center pt-3">
            <Tabs defaultValue="general" className="sm:w-[400px] md:w-[500px]">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="by_category_id">By Category ID</TabsTrigger>
                <TabsTrigger value="by_products_ids">
                  By Products IDs
                </TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <Card>
                  <CardHeader>
                    <CardTitle>General Products</CardTitle>
                    <CardDescription>
                      Fill the Inputs here for default banner. Click save when
                      you are done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <GeneralProductsForm setIsOpen={setIsOpen} />
                  </CardContent>
                  <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="by_category_id">
                <Card>
                  <CardHeader>
                    <CardTitle>By Category ID</CardTitle>
                    <CardDescription>
                      Fill the Inputs here for default banner. Click save when
                      you are done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ByCategoryIdForm setIsOpen={setIsOpen} />
                  </CardContent>
                  <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="by_products_ids">
                <Card>
                  <CardHeader>
                    <CardTitle>By Products IDs</CardTitle>
                    <CardDescription className="flex items-center justify-center">
                      Fill the Inputs here for Referenced Banner and do not
                      forget the reference id. Click save when you are done..
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ByProductsIdsForm setIsOpen={setIsOpen} />
                  </CardContent>
                  <CardFooter>
                    {/* <Button>Save password</Button> */}
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
