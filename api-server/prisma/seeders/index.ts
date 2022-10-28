import { PrismaClient } from '@prisma/client';
import { dbUserSeed } from './user.seed';
import { dbTodoSeed } from './todo.seed';

const prisma = new PrismaClient();

const dbSeed = async () => {
  await dbUserSeed(prisma);
  await dbTodoSeed(prisma);
};

const main = async () => {
  console.log('Start seeding ...');

  await dbSeed();

  console.log('Seeding finished.');
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
