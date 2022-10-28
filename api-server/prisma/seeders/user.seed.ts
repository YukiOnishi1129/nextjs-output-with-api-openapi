import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const userData: Array<Omit<User, 'createdAt' | 'updatedAt'>> = [
  {
    id: 1,
    name: 'taro',
    email: 'sample1@test.com',
    password: '',
  },
  {
    id: 2,
    name: 'jiro',
    email: 'sample2@test.com',
    password: '',
  },
  {
    id: 3,
    name: 'hanako',
    email: 'sample3@test.com',
    password: '',
  },
];

export const dbUserSeed = async (prisma: any) => {
  const hashPassword = await bcrypt.hash('password', 10);
  const users = [];
  userData.forEach((user) => {
    user.password = hashPassword;
    const createUser = prisma.user.create({
      data: user,
    });
    users.push(createUser);
  });
  return await prisma.$transaction(users);
};
