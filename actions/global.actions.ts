"use server";
import {} from "@/validation";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getWidgetsAction = async () => {
  return await prisma.widget.findMany({
    orderBy: [
      {
        order: "asc",
      },
      { createdAt: "asc" },
    ],
  });
};
