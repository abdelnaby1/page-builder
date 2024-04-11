"use client";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ByCategoriesIdsForm } from "./ByCategoriesIds";
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

export default function Categories() {
  const [isIpen, setIsOpen] = useState(false);
  return (
    <div className="text-right mb-3">
      <Sheet open={isIpen} onOpenChange={setIsOpen}>
        <SheetTrigger className={buttonVariants()}>
          <Plus size={16} className="mr-1" />
          New Categories Widget
        </SheetTrigger>
        <SheetContent className="overflow-y-auto  min-w-[450px]">
          <SheetHeader>
            <SheetTitle className="text-center mt-4">
              Categories Form
            </SheetTitle>
            <SheetDescription className="text-center">
              Here you can create Categories Widget to be shown in your app.
            </SheetDescription>
          </SheetHeader>
          <div className="flex flex-col h-fit items-center pt-3">
            <Tabs defaultValue="by_categories_ids" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value="by_categories_ids">Categories</TabsTrigger>
              </TabsList>
              <TabsContent value="by_categories_ids">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                    <CardDescription>
                      Fill the Inputs here for Categories Widget. Click save
                      when you are done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <ByCategoriesIdsForm setIsOpen={setIsOpen} />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
