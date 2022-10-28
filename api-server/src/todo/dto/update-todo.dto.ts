import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty({
    example: 'Todo4 update',
    type: String,
    minLength: 2,
    maxLength: 25,
  })
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    example: 'Todo content4 sample update',
    type: String,
  })
  @IsNotEmpty()
  content: string;
}
