import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    example: 'Todo4 created',
    type: String,
    minLength: 2,
    maxLength: 25,
  })
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @ApiProperty({
    example: 'Todo content4 sample created',
    type: String,
  })
  @IsNotEmpty()
  content: string;
}
