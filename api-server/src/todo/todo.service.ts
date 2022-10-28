import { Injectable } from '@nestjs/common';
import { Todo } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto, userId: number) {
    return await this.prisma.todo.create({
      data: {
        title: createTodoDto.title,
        content: createTodoDto.content,
        userId,
      },
    });
  }

  async findAll(userId: number): Promise<Todo[]> {
    return await this.prisma.todo.findMany({
      where: {
        userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    return await this.prisma.todo.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        title: updateTodoDto.title,
        content: updateTodoDto.content,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.todo.delete({
      where: {
        id,
      },
    });
  }
}
