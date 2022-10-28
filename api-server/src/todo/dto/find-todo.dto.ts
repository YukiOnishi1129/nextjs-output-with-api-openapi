import { ApiProperty } from '@nestjs/swagger';
import { TodoEntity } from '../entities/todo.entity';

export class FindTodoResponseDto {
  @ApiProperty({
    example: {
      id: 1,
      title: 'Todo1 sample',
      content: 'Todo content1 sample',
      userId: 1,
      createdAt: '2022-10-28T08:38:14.237Z',
      updatedAt: '2022-10-28T08:38:14.237Z',
    },
    type: TodoEntity,
  })
  todo: TodoEntity;
}

export class FindTodoListResponseDto {
  @ApiProperty({
    type: [TodoEntity],
    example: [
      {
        id: 1,
        title: 'Todo1 sample',
        content: 'Todo content1 sample',
        userId: 1,
        createdAt: '2021-10-28T08:38:14.237Z',
        updatedAt: '2021-10-28T08:38:14.237Z',
      },
      {
        id: 2,
        title: 'Todo2 sample',
        content: 'Todo content2 sample',
        userId: 1,
        createdAt: '2021-10-28T08:38:14.237Z',
        updatedAt: '2021-10-28T08:38:14.237Z',
      },
      {
        id: 3,
        title: 'Todo3 sample',
        content: 'Todo content3 sample',
        userId: 1,
        createdAt: '2021-10-28T08:38:14.237Z',
        updatedAt: '2021-10-28T08:38:14.237Z',
      },
    ],
  })
  todos: [TodoEntity];
}
