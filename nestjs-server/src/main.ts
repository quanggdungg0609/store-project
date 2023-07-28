import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //config swagger document
  const config= new DocumentBuilder()
    .setTitle("DH Paris Store API")
    .setDescription("DH Paris API description")
    .setVersion("1.0")
    .addBearerAuth()
    .addTag("Auth")
    .addTag("Users")
    .addTag("Products")
    .build()
  const document= SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, document)
  
  app.enableCors();
  await app.listen(3333);
}
bootstrap();
