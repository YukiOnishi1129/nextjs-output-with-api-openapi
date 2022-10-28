import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { PrismaService } from '../prisma.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [TodoController],
  providers: [TodoService, PrismaService],
})
export class TodoModule {}
