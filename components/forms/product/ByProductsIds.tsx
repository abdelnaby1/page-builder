"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

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
  ProductsByProductsIdsFormSchema,
  ProductsByProductsIdsFormValues,
} from "@/validation";
import Spinner from "@/components/Spinner";
import {
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useState,
} from "react";
import { createProductsByProductsIdsAction } from "@/actions/products.actions";
import { uploadImage } from "@/firebase";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { capitalizeEveryWord, cn } from "@/lib/utils";

const directions = ["horizontal", "vertical"];

const defaultValues: Partial<ProductsByProductsIdsFormValues> = {
  name_en: "",
  name_ar: "",
  products_ids: [],
  direction: directions[0],
};
interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});
interface Iprops {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export function ByProductsIdsForm({ setIsOpen }: Iprops) {
  const [isLoading, setIsLoading] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = async (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setValue((prev) => [...prev, createOption(inputValue)]);
        form.clearErrors("products_ids");
        setInputValue("");
        event.preventDefault();
    }
  };

  const form = useForm<ProductsByProductsIdsFormValues>({
    resolver: zodResolver(ProductsByProductsIdsFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ProductsByProductsIdsFormValues) {
    try {
      if (value.length === 0) {
        form.setError("products_ids", {
          message: "Please add at least One Product Id.",
        });
        return;
      }
      await ProductsByProductsIdsFormSchema.parseAsync(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Validation failed:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
    try {
      setIsLoading(true);
      await createProductsByProductsIdsAction({
        name_en: data.name_en,
        name_ar: data.name_ar,
        products_ids: value.map((v) => +v.value),
        type: data.direction + "_products_by_products_ids",
      });
      toast({
        title: "Your Widget has been submitted.",
        description: "Your Products Widget has been created successfully.",
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
    } finally {
      setIsLoading(false);
      setIsOpen(false);
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
          name="products_ids"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Products IDs</FormLabel>
              <FormControl>
                {/* <Input placeholder="Category Id..." {...field} /> */}
                <CreatableSelect
                  components={{ DropdownIndicator: null }}
                  inputValue={inputValue}
                  isClearable
                  isMulti
                  menuIsOpen={false}
                  onChange={(newValue) => setValue(newValue)}
                  onInputChange={(newValue) => setInputValue(newValue)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type something and press enter..."
                  value={value}

                  // {...field}
                />
              </FormControl>
              <FormMessage />
              {/* <FormMessage>{`${form.formState.errors["products_ids"]}`}</FormMessage> */}
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
