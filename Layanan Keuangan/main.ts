
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Start the application
  await app.listen(3001);
  console.log('Financial Service API is running on http://localhost:3001');
}
bootstrap();
