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
