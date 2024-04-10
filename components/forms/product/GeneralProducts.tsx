"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
  GeneralProductsFormSchema,
  GeneralProductsFormValues,
} from "@/validation";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { capitalizeEveryWord } from "@/lib/utils";
import { createGeneralProductsAction } from "@/actions/products.actions";

const types = ["featured_products", "sale_products"];
const directions = ["horizontal", "vertical"];
const defaultValues: Partial<GeneralProductsFormValues> = {
  name_en: "",
  name_ar: "",
  type: types[0],
  direction: directions[0],
};

export function GeneralProductsForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<GeneralProductsFormValues>({
    resolver: zodResolver(GeneralProductsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: GeneralProductsFormValues) {
    try {
      setIsLoading(true);
      await createGeneralProductsAction({
        name_en: data.name_en,
        name_ar: data.name_ar,
        type: data.direction + "_" + data.type,
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
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a type for this Products Widget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {types.map((v, idx) => (
                    <SelectItem key={idx} value={v}>
                      {capitalizeEveryWord(v.replace(/_/g, " "))}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
