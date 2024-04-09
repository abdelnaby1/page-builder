"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  ReferencedBannerFormSchema,
  ReferencedBannerFormValues,
} from "@/validation";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import {
  createReferencedBannerAction,
  getBannersAction,
} from "@/actions/banner.actions";
import { uploadImage } from "@/firebase";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { createReferencedSliderItemAction } from "@/actions/slider.actions";

const referenceValues = ["Product", "Category"];
const defaultValues: Partial<ReferencedBannerFormValues> = {
  name_en: "",
  name_ar: "",
  ref_type: "",
  ref_id: 1,
};

export function ReferencedSliderForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ReferencedBannerFormValues>({
    resolver: zodResolver(ReferencedBannerFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ReferencedBannerFormValues) {
    try {
      setIsLoading(true);
      const widgets = await getBannersAction();
      const url_en = await uploadImage(data.image_en);
      const url_ar = await uploadImage(data.image_ar);
      await createReferencedSliderItemAction({
        name_en: data.name_en,
        name_ar: data.name_ar,
        url_en: url_en!,
        url_ar: url_ar!,
        type: "slider",
        ref_type: data.ref_type,
        ref_id: data.ref_id,
      });
      setIsLoading(false);
      toast({
        title: "Your Widget has been submitted.",
        description: "Your Slider has been created successfully.",
      });
    } catch (error) {
      console.log("error", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction altText="Try again" onClick={() => onSubmit(data)}>
            Try again
          </ToastAction>
        ),
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name_en"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name in English</FormLabel>
              <FormControl>
                <Input placeholder="Name in en" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_ar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name in Arabic</FormLabel>
              <FormControl>
                <Input placeholder="Name in ar" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image_en"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enlgish Image</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept="image/jpeg, image/png image/jpg"
                  value={undefined}
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      const fileList = Array.from(files);
                      console.log("files", files);
                      console.log("fileList", fileList);
                      field.onChange(files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image_ar"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enlgish Image</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept="image/jpeg, image/png image/jpg"
                  value={undefined}
                  onChange={(e) => {
                    const files = e.target.files;

                    if (files) {
                      field.onChange(files[0]);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ref_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Reference Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {referenceValues.map((v, idx) => (
                    <SelectItem key={idx} value={v}>
                      {v}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                You can select the type which will This banner reference it.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ref_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reference ID</FormLabel>
              <FormControl>
                <Input placeholder="Reference Id..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {isLoading ? (
          <Button>
            <Spinner /> <p className="mx-1">Saving</p>
          </Button>
        ) : (
          <Button type="submit">Save changes</Button>
        )}
      </form>
    </Form>
  );
}
