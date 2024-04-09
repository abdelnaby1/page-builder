"use server";
import {} from "@/validation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

// export const getBannersAction = async () => {
//   return await prisma.widget.findMany();
// };
export const createDefaultSliderItemAction = async ({
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
      sliderData: [{ name_en, name_ar, url_en, url_ar }],
    },
  });
  revalidatePath("/");
  redirect(`/`);
};
export const createReferencedSliderItemAction = async ({
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
      sliderData: [{ name_en, name_ar, url_en, url_ar, ref_type, ref_id }],
    },
  });
  revalidatePath("/");
  redirect(`/`);
};
export const addDefaultSliderItemAction = async ({
  sliderId,
  name_en,
  name_ar,
  url_en,
  url_ar,
}: {
  sliderId: string;
  name_en: string;
  name_ar: string;
  url_en: string;
  url_ar: string;
  type: string;
}) => {
  const widget = await prisma.widget.findUnique({
    where: {
      id: sliderId,
    },
  });

  if (widget) {
    widget.sliderData.push({
      name_en,
      name_ar,
      url_en,
      url_ar,
      ref_type: "Default",
      ref_id: null,
    });
    await prisma.widget.update({
      where: {
        id: sliderId,
      },
      data: {
        sliderData: widget.sliderData,
      },
    });
    revalidatePath("/");
    redirect(`/`);
  }
};
export const addReferencedSliderItemAction = async ({
  sliderId,
  name_en,
  name_ar,
  url_en,
  url_ar,
  ref_type,
  ref_id,
}: {
  sliderId: string;
  name_en: string;
  name_ar: string;
  url_en: string;
  url_ar: string;
  type: string;
  ref_type: string;
  ref_id: number;
}) => {
  const widget = await prisma.widget.findUnique({
    where: {
      id: sliderId,
    },
  });

  if (widget) {
    widget.sliderData.push({
      name_en,
      name_ar,
      url_en,
      url_ar,
      ref_type,
      ref_id,
    });
    await prisma.widget.update({
      where: {
        id: sliderId,
      },
      data: {
        sliderData: widget.sliderData,
      },
    });
    revalidatePath("/");
    redirect(`/`);
  }
};
export const deleteSliderAction = async () => {};
