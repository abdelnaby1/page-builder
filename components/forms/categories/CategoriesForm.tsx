import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ByCategoriesIdsForm } from "./ByCategoriesIds";

export function CategoriesForm() {
  return (
    <Tabs defaultValue="by_categories_ids" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-1">
        <TabsTrigger value="by_categories_ids">Categories</TabsTrigger>
      </TabsList>
      <TabsContent value="by_categories_ids">
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
            <CardDescription>
              Fill the Inputs here for Categories Widget. Click save when you
              are done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ByCategoriesIdsForm />
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
