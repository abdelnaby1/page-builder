import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { faker as FakerAr } from "@faker-js/faker/locale/ar";

const prisma = new PrismaClient();

async function main() {
  await prisma.widget.createMany({
    data: Array.from({ length: 5 }, () => ({
      type: "banner",
      order: faker.number.int({ min: 1, max: 200 }),
      ref_type: "product",
      ref_id: faker.number.int({ min: 1, max: 1000 }),
      name_en: faker.lorem.words({ min: 1, max: 3 }),
      name_ar: FakerAr.lorem.words({ min: 1, max: 3 }),
      url_en: faker.image.url(),
      url_ar: faker.image.url(),
    })),
  });

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     todos: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
