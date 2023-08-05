import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OgmaService } from '@ogma/nestjs-module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const logger = app.get<OgmaService>(OgmaService);
  app.useLogger(logger);
}
bootstrap();
