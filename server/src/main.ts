import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import { CollectionsModule } from './collections/collections.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // Mô phỏng api cho user
  const userOptions = new DocumentBuilder()
    .setTitle('User example')
    .setDescription('Mô phỏng tất cả api về User')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth(
      {
        // I was also testing it without prefix 'Bearer ' before the JWT
        description: `[just text field] Api nào cần Đến Token thì thì nhập vào nhé: Bearer <JWT>`,
        name: 'Authorization',
        bearerFormat: 'Bearer', // I`ve tested not to use this field, but the result was the same
        scheme: 'Bearer',
        type: 'http', // I`ve attempted type: 'apiKey' too
        in: 'Header',
      },
      'access-token', // This name here is important for matching up with @ApiBearerAuth() in your controller!
    )
    .build();

  const userdocument = SwaggerModule.createDocument(app, userOptions, {
    include: [UsersModule],
  });

  SwaggerModule.setup('api/users', app, userdocument);
  // ->>>>>>end Mô phỏng api cho user

  // Mô phỏng api cho Collections
  const CollectionOptions = new DocumentBuilder()
    .setTitle('Collects example')
    .setDescription('Mô phỏng tất cả api về Collections')
    .setVersion('1.0')
    .addTag('collections')
    .build();

  const collectDocument = SwaggerModule.createDocument(app, CollectionOptions, {
    include: [CollectionsModule],
  });

  SwaggerModule.setup('api/collects', app, collectDocument);
  // ->>>>>>end Mô phỏng api cho Collections

  await app.listen(3000);
}
bootstrap();
