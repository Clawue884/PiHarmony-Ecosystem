port { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors();

  // Start the application
  await app.listen(3000);
  console.log('Multi-Asset Wallet API is running on http://localhost:3000');
}
bootstrap();


---
