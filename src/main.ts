import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('port') || 3003;

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    }),
  );
  await app.listen(PORT).then(() => {
    Logger.log(`Server is running on port ${PORT}`);
  });
}

bootstrap();
