import { Todo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TodoEntity implements Todo {
  @ApiProperty({
    example: 1,
    type: Number,
  })
  id: number;

  @ApiProperty({
    example: 'Todo1 sample',
    type: String,
    minLength: 2,
    maxLength: 25,
  })
  title: string;

  @ApiProperty({
    example: 'Todo content1 sample',
    type: String,
  })
  content: string;

  @ApiProperty({
    example: 1,
    type: String,
  })
  userId: number;

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
