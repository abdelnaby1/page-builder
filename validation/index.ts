import { z } from "zod";
const MAX_FILE_SIZE = 1000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  // "image/png",
  // "image/webp",
];

export const DefaultBannerFormSchema = z.object({
  name_en: z
    .string()
    .min(6, {
      message: "Name in Enlish must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Enlish must not be longer than 30 characters.",
    }),
  name_ar: z
    .string()
    .min(6, {
      message: "Name in Arabic must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Arabic must not be longer than 30 characters.",
    }),
  image_en: z
    .any({ required_error: "image in enlgish is required" })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 1 MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only.jpeg, .jpg formats are supported."
    ),
  image_ar: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 1 MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only.jpeg, .jpg formats are supported."
    ),
});

export type DefaultBannerFormValues = z.infer<typeof DefaultBannerFormSchema>;

export const ReferencedBannerFormSchema = z.object({
  name_en: z
    .string()
    .min(6, {
      message: "Name in Enlish must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Enlish must not be longer than 30 characters.",
    }),
  name_ar: z
    .string()
    .min(6, {
      message: "Name in Arabic must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Arabic must not be longer than 30 characters.",
    }),
  image_en: z
    .any({ required_error: "image in enlgish is required" })
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 1 MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only.jpeg, .jpg formats are supported."
    ),
  image_ar: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 1 MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
      "Only.jpeg, .jpg formats are supported."
    ),
  ref_type: z.string(),
  ref_id: z.coerce
    .number({
      required_error: "Reference ID is required",
      invalid_type_error: "Reference ID must be a number",
    })
    .positive("Reference ID must be a valid postive number"),
});

export type ReferencedBannerFormValues = z.infer<
  typeof ReferencedBannerFormSchema
>;

export const GeneralProductsFormSchema = z.object({
  name_en: z
    .string()
    .min(6, {
      message: "Name in Enlish must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Enlish must not be longer than 30 characters.",
    }),
  name_ar: z
    .string()
    .min(6, {
      message: "Name in Arabic must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Arabic must not be longer than 30 characters.",
    }),
  type: z.string(),
  direction: z.string(),
});

export type GeneralProductsFormValues = z.infer<
  typeof GeneralProductsFormSchema
>;

export const ProductsByCategoryIdFormSchema = z.object({
  name_en: z
    .string()
    .min(6, {
      message: "Name in Enlish must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Enlish must not be longer than 30 characters.",
    }),
  name_ar: z
    .string()
    .min(6, {
      message: "Name in Arabic must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Arabic must not be longer than 30 characters.",
    }),
  category_id: z.coerce
    .number({
      required_error: "Reference ID is required",
      invalid_type_error: "Reference ID must be a number",
    })
    .positive("Reference ID must be a valid postive number"),
  direction: z.string(),
});

export type ProductsByCategoryIdFormValues = z.infer<
  typeof ProductsByCategoryIdFormSchema
>;

interface Option {
  readonly label: string;
  readonly value: string;
}
export const ProductsByProductsIdsFormSchema = z.object({
  name_en: z
    .string()
    .min(6, {
      message: "Name in Enlish must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Enlish must not be longer than 30 characters.",
    }),
  name_ar: z
    .string()
    .min(6, {
      message: "Name in Arabic must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Arabic must not be longer than 30 characters.",
    }),
  products_ids: z.array(z.number()).optional(),
  direction: z.string(),
});

export type ProductsByProductsIdsFormValues = z.infer<
  typeof ProductsByProductsIdsFormSchema
>;

export const CategoriesByCategoriesIdsFormSchema = z.object({
  name_en: z
    .string()
    .min(6, {
      message: "Name in Enlish must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Enlish must not be longer than 30 characters.",
    }),
  name_ar: z
    .string()
    .min(6, {
      message: "Name in Arabic must be at least 6 characters.",
    })
    .max(30, {
      message: "Name in Arabic must not be longer than 30 characters.",
    }),
  categoeis_ids: z.array(z.number()).optional(),
  direction: z.string(),
});

export type CategoriesByCategoriesIdsFormValues = z.infer<
  typeof CategoriesByCategoriesIdsFormSchema
>;
