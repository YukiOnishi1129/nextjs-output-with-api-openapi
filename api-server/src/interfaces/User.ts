import { User } from '@prisma/client';

export type ResponseUserType = Omit<User, 'password'>;
