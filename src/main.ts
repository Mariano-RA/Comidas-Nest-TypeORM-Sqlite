import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

console.log('DATABASE_URL:', process.env.DATABASE_URL);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permitir CORS (ajustá si querés limitar orígenes)
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(`🚀 App running on http://localhost:${port}`);
}
bootstrap();
