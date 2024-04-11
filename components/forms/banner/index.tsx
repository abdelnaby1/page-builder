"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DefaultBannerForm } from "./DefaultBanner";
import { ReferencedBannerForm } from "./ReferencedBanner";
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

export default function Banner() {
  const [isIpen, setIsOpen] = useState(false);

  return (
    <div className="text-right mb-3">
      <Sheet open={isIpen} onOpenChange={setIsOpen}>
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
            <Tabs defaultValue="default" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="default">Default Banner</TabsTrigger>
                <TabsTrigger value="referenced">Reference Banner</TabsTrigger>
              </TabsList>
              <TabsContent value="default">
                <Card>
                  <CardHeader>
                    <CardTitle>Default Banner</CardTitle>
                    <CardDescription>
                      Fill the Inputs here for default banner. Click save when
                      you are done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <DefaultBannerForm setIsOpen={setIsOpen} />
                  </CardContent>
                  <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="referenced">
                <Card>
                  <CardHeader>
                    <CardTitle>Refrenced Banner</CardTitle>
                    <CardDescription>
                      Fill the Inputs here for Referenced Banner and do not
                      forget the reference id. Click save when you are done..
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ReferencedBannerForm setIsOpen={setIsOpen} />
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
