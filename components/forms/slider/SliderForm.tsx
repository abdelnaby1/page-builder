import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DefaultSliderForm } from "./DefaultSlider";
import { ReferencedSliderForm } from "./ReferencedSlider";

export function SliderForm() {
  return (
    <Tabs defaultValue="default" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="default">Default Slider Item</TabsTrigger>
        <TabsTrigger value="referenced">Reference Slider Item</TabsTrigger>
      </TabsList>
      <TabsContent value="default">
        <Card>
          <CardHeader>
            <CardTitle>Default Slider Item</CardTitle>
            <CardDescription>
              Fill the Inputs here for default Slider Item. Click save when you
              are done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <DefaultSliderForm />
          </CardContent>
          <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="referenced">
        <Card>
          <CardHeader>
            <CardTitle>Refrenced Slider Item</CardTitle>
            <CardDescription>
              Fill the Inputs here for Referenced Slider Item and do not forget
              the reference id. Click save when you are done..
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ReferencedSliderForm />
          </CardContent>
          <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
