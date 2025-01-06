import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { BankService } from './bank.service';

@Controller('bank')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Post('create-account')
  async createAccount(@Body('userId') userId: string) {
    return this.bankService.createAccount(userId);
  }

  @Post('deposit')
  async deposit(@Body() depositData: { userId: string; amount: number; currency: string }) {
    return this.bankService.deposit(depositData);
  }

  @Post('withdraw')
  async withdraw(@Body() withdrawData: { userId: string; amount: number; currency: string }) {
    return this.bankService.withdraw(withdrawData);
  }

  @Post('transfer')
  async transfer(@Body() transferData: { fromUserId: string; toUserId: string; amount: number; currency: string }) {
    return this.bankService.transfer(transferData);
  }

  @Get(':userId')
  async getAccount(@Param('userId') userId: string) {
    return this.bankService.getAccount(userId);
  }
}


---
