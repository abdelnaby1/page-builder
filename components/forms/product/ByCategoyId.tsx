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
import {
  DefaultBannerFormSchema,
  DefaultBannerFormValues,
  ProductsByCategoryIdFormSchema,
  ProductsByCategoryIdFormValues,
} from "@/validation";
import { useState } from "react";
import { uploadImage } from "@/firebase";
import { createDefaultBannerAction } from "@/actions/banner.actions";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Spinner from "@/components/Spinner";
import { createProductsByCategoryIdAction } from "@/actions/products.actions";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { capitalizeEveryWord } from "@/lib/utils";

const directions = ["horizontal", "vertical"];
const defaultValues: Partial<ProductsByCategoryIdFormValues> = {
  name_en: "",
  name_ar: "",
  category_id: 1,
  direction: directions[0],
};

export function ByCategoryIdForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<ProductsByCategoryIdFormValues>({
    resolver: zodResolver(ProductsByCategoryIdFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ProductsByCategoryIdFormValues) {
    try {
      setIsLoading(true);
      await createProductsByCategoryIdAction({
        name_en: data.name_en,
        name_ar: data.name_ar,
        category_id: data.category_id,
        type: data.direction + "_products_by_category_id",
      });
      toast({
        title: "Your Widget has been submitted.",
        description: "Your Products Widget has been created successfully.",
      });
      form.reset();
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
    } finally {
      setIsLoading(false);
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
          name="category_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category ID</FormLabel>
              <FormControl>
                <Input placeholder="Category Id..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="direction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direction</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a direction of this Products Widget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {directions.map((v, idx) => (
                    <SelectItem key={idx} value={v}>
                      {capitalizeEveryWord(v)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
