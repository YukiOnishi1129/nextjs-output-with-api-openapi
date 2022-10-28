import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpUserDto {
  @ApiProperty({
    example: 'ユーザー1',
    type: String,
  })
  @IsString()
  @MaxLength(25)
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'user1@test.com',
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'password',
    type: String,
  })
  @IsString()
  @MinLength(6)
  @MaxLength(25)
  @IsNotEmpty()
  password: string;
}
