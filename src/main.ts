import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger"

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  const configDoc = new DocumentBuilder()
  .setTitle('Feedback form by Fiksik')
  .setDescription('Documentation REST API')
  .setVersion('1.0.0')
  .addTag('Fiksik')
  .build()

  const document = SwaggerModule.createDocument(app, configDoc);
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start()
