"use server";
import {} from "@/validation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export const getAllCategoriesAction = async () => {
  return await prisma.widget.findMany({
    where: {
      type: {
        contains: "_categories_by_",
      },
    },
    select: {
      id: true,
      type: true,
      categoriesData: true,
      createdAt: true,
    },
  });
};

export const createCategoriesByCategoriesIdsAction = async ({
  name_en,
  name_ar,
  categories_ids,
  type,
}: {
  name_en: string;
  name_ar: string;
  categories_ids: number[] | undefined;
  type: string;
}) => {
  const lastWidget = await prisma.widget.findMany({
    orderBy: { order: "desc" },
    take: 1,
    select: {
      order: true,
    },
  });
  let order = 1;
  if (lastWidget.length) {
    order = lastWidget[0].order + 1;
  }

  await prisma.widget.create({
    data: {
      order,
      type,
      categoriesData: { name_en, name_ar, categories_ids },
    },
  });
  revalidatePath("/categories");

  redirect(`/categories`);
};
