"use server";
import {} from "@/validation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { title } from "process";
const prisma = new PrismaClient();

export const getBannersAction = async () => {
  return await prisma.widget.findMany();
};
export const createDefaultBannerAction = async ({
  name_en,
  name_ar,
  url_en,
  url_ar,
  type,
}: {
  name_en: string;
  name_ar: string;
  url_en: string;
  url_ar: string;
  type: string;
}) => {
  const currentCount = await prisma.widget.count();

  const order = currentCount + 1;
  await prisma.widget.create({
    data: {
      order,
      type,
      bannerData: { name_en, name_ar, url_en, url_ar },
    },
  });
  revalidatePath("/");
  redirect(`/`);
};
export const createReferencedBannerAction = async ({
  name_en,
  name_ar,
  url_en,
  url_ar,
  type,
  ref_type,
  ref_id,
}: {
  name_en: string;
  name_ar: string;
  url_en: string;
  url_ar: string;
  type: string;
  ref_type: string;
  ref_id: number;
}) => {
  const currentCount = await prisma.widget.count();

  const order = currentCount + 1;
  await prisma.widget.create({
    data: {
      order,
      type,
      bannerData: { name_en, name_ar, url_en, url_ar, ref_type, ref_id },
    },
  });
  revalidatePath("/");
  redirect(`/`);
};
export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
