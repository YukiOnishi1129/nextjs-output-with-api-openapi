import {
  Request,
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { TodoService } from './todo.service';
import { TodoEntity } from './entities/todo.entity';
import {
  FindTodoResponseDto,
  FindTodoListResponseDto,
} from './dto/find-todo.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { JwtPayload } from '../lib/jwt/interfaces/jwt-payload.interface';

@ApiBearerAuth()
@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @HttpCode(201)
  @ApiCreatedResponse({
    type: FindTodoResponseDto,
    description: 'Todo新規作成完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async create(
    @Body(ValidationPipe) createTodoDto: CreateTodoDto,
    @Request() req: { user: JwtPayload },
  ) {
    const todo = await this.todoService.create(createTodoDto, req.user.userId);
    return {
      todo: todo as TodoEntity,
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @HttpCode(200)
  @ApiOkResponse({
    type: FindTodoListResponseDto,
    description: 'Todoリスト取得完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async findAll(
    @Request() req: { user: JwtPayload },
  ): Promise<FindTodoListResponseDto> {
    const todos = await this.todoService.findAll(req.user.userId);
    return {
      todos: todos as [TodoEntity],
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @HttpCode(200)
  @ApiOkResponse({
    type: FindTodoResponseDto,
    description: 'Todo取得完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async findOne(@Param('id') id: string, @Request() req: { user: JwtPayload }) {
    const todo = await this.todoService.findOne(+id, req.user.userId);
    return {
      todo: todo as TodoEntity,
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @HttpCode(200)
  @ApiOkResponse({
    type: FindTodoResponseDto,
    description: 'Todo更新完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoService.update(+id, updateTodoDto);
    return {
      todo: todo as TodoEntity,
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @HttpCode(201)
  @ApiOkResponse({
    type: FindTodoResponseDto,
    description: 'Todo削除完了',
  })
  @ApiUnauthorizedResponse({
    description: '認証エラー',
  })
  async remove(@Param('id') id: string) {
    const todo = await this.todoService.remove(+id);
    return {
      todo: todo as TodoEntity,
    };
  }
}
