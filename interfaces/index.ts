import { number } from "zod";

export interface IBanner {
  id: string;
  type: string;
  createdAt: Date;
  bannerData: {
    name_en: string;
    name_ar: string;
    url_en: string;
    url_ar: string;
    ref_type: string | null;
    ref_id: number | null;
  } | null;
}
export interface ICategories {
  id: string;
  type: string;
  createdAt: Date;
  categoriesData: {
    name_en: string;
    name_ar: string;
    categories_ids: number[];
  } | null;
}
export interface IProducts {
  id: string;
  type: string;
  createdAt: Date;
  productsData: {
    name_en: string;
    name_ar: string;
    category_id: number | null;
    products_ids: number[];
  } | null;
}
