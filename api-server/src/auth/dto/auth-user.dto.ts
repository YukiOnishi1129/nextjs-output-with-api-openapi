import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../entities/user.entity';

export class AuthResponseDto {
  @ApiProperty({
    example: {
      id: 1,
      name: 'ユーザー1',
      email: 'user1@test.com',
      createdAt: '2022-10-28T08:38:14.237Z',
      updatedAt: '2022-10-28T08:38:14.237Z',
    },
    type: UserEntity,
  })
  user: UserEntity;

  @ApiProperty({
    example: 'token',
    type: String,
  })
  accessToken: string;
}
