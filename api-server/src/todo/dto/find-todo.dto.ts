import { IsNotEmpty, IsNumber } from 'class-validator';

export class FindTodoDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;
}
