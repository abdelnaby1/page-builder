"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { DefaultBannerFormSchema, DefaultBannerFormValues } from "@/validation";
import { useState } from "react";
import { uploadImage } from "@/firebase";
import {
  createDefaultBannerAction,
  getBannersAction,
} from "@/actions/banner.actions";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Spinner from "@/components/Spinner";

const defaultValues: Partial<DefaultBannerFormValues> = {
  name_en: "",
  name_ar: "",
};

export function DefaultBannerForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<DefaultBannerFormValues>({
    resolver: zodResolver(DefaultBannerFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: DefaultBannerFormValues) {
    try {
      setIsLoading(true);
      const widgets = await getBannersAction();
      console.log("widgets", widgets);
      const url_en = await uploadImage(data.image_en);
      const url_ar = await uploadImage(data.image_ar);
      await createDefaultBannerAction({
        name_en: data.name_en,
        name_ar: data.name_ar,
        url_en: url_en!,
        url_ar: url_ar!,
        type: "banner",
      });
      setIsLoading(false);
      toast({
        title: "Your Widget has been submitted.",
        description: "Your Banner has been created successfully.",
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
