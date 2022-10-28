import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TodoModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }), // envファイルを組み込むために使用
  ],
})
export class AppModule {}
