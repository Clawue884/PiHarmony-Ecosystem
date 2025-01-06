import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';

@Module({
  controllers: [BankController],
  providers: [BankService],
})
export class BankModule {}


---
