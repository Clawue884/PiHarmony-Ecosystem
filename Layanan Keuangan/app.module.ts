import { Module } from '@nestjs/common';
import { BankModule } from './modules/bank/bank.module';
import { KycModule } from './modules/kyc/kyc.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [BankModule, KycModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


---
