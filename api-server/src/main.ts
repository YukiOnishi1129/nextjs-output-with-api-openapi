import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // APIのURLを全て「/api」から始まるようにする
  app.setGlobalPrefix('api');
  // CORS対応
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost'],
  });

  // Swagger拡張の有効化
  const config = new DocumentBuilder()
    .setTitle('API description')
    .setVersion('1.0')
    .addServer('/')
    .addBearerAuth() // swaggerのauthorizeを有効化
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // YAML
  fs.writeFileSync('./openapi/openapi-spec.yaml', dump(document, {}));

  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
