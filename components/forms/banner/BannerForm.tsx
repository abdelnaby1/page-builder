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
import { DefaultBannerForm } from "./DefaultBanner";
import { ReferencedBannerForm } from "./ReferencedBanner";

export function BannerForm() {
  return (
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
              Fill the Inputs here for default banner. Click save when you are
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <DefaultBannerForm />
          </CardContent>
          <CardFooter>{/* <Button>Save changes</Button> */}</CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="referenced">
        <Card>
          <CardHeader>
            <CardTitle>Refrenced Banner</CardTitle>
            <CardDescription>
              Fill the Inputs here for Referenced Banner and do not forget the
              reference id. Click save when you are done..
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ReferencedBannerForm />
          </CardContent>
          <CardFooter>{/* <Button>Save password</Button> */}</CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
