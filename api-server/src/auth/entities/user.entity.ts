import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements Omit<User, 'password'> {
  @ApiProperty({
    example: 1,
    type: Number,
  })
  id: number;

  @ApiProperty({
    example: 'ユーザー1',
    type: String,
    minLength: 2,
    maxLength: 25,
  })
  name: string;

  @ApiProperty({
    example: 'user1@test.com',
    type: String,
    maxLength: 255,
  })
  email: string;

  @ApiProperty({
    example: '2022-10-28T08:38:14.237Z',
    type: Date,
  })
  createdAt: Date;

  @ApiProperty({
    example: '2022-10-28T08:38:14.237Z',
    type: Date,
  })
  updatedAt: Date;
}
