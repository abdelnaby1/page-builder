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

export function ProductForm() {
  return (
    <Tabs defaultValue="general" className="sm:w-[400px] md:w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="by_category_id">By Category ID</TabsTrigger>
        <TabsTrigger value="by_products_ids">By Products IDs</TabsTrigger>
      </TabsList>
      <TabsContent value="general">
        <Card>
          <CardHeader>
            <CardTitle>General Products</CardTitle>
            <CardDescription>
              Fill the Inputs here for default banner. Click save when you are
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <GeneralProductsForm />
          </CardContent>
          <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="by_category_id">
        <Card>
          <CardHeader>
            <CardTitle>By Category ID</CardTitle>
            <CardDescription>
              Fill the Inputs here for default banner. Click save when you are
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ByCategoryIdForm />
          </CardContent>
          <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="by_products_ids">
        <Card>
          <CardHeader>
            <CardTitle>By Products IDs</CardTitle>
            <CardDescription className="flex items-center justify-center">
              Fill the Inputs here for Referenced Banner and do not forget the
              reference id. Click save when you are done..
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ByProductsIdsForm />
          </CardContent>
          <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
