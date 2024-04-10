"use server";
import {} from "@/validation";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export const getAllProductsAction = async () => {
  return await prisma.widget.findMany({
    where: {
      type: "banner",
    },
    select: {
      id: true,
      type: true,
      productsData: true,
      createdAt: true,
    },
  });
};
export const createGeneralProductsAction = async ({
  name_en,
  name_ar,
  type,
}: {
  name_en: string;
  name_ar: string;
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
      productsData: { name_en, name_ar },
    },
  });
  revalidatePath("/products");

  redirect(`/products`);
};
export const createProductsByCategoryIdAction = async ({
  name_en,
  name_ar,
  category_id,
  type,
}: {
  name_en: string;
  name_ar: string;
  category_id: number;
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
      productsData: { name_en, name_ar, category_id },
    },
  });
  revalidatePath("/products");

  redirect(`/products`);
};
export const createProductsByProductsIdsAction = async ({
  name_en,
  name_ar,
  products_ids,
  type,
}: {
  name_en: string;
  name_ar: string;
  products_ids: number[] | undefined;
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
      productsData: { name_en, name_ar, products_ids },
    },
  });
  revalidatePath("/products");

  redirect(`/products`);
};

export const updateTodoAction = async () => {};
export const deleteTodoAction = async () => {};
