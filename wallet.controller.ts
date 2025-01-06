
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('create')
  async createWallet(@Body('userId') userId: string) {
    return this.walletService.createWallet(userId);
  }

  @Get(':userId')
  async getWallet(@Param('userId') userId: string) {
    return this.walletService.getWallet(userId);
  }

  @Post('transfer')
  async transferAssets(@Body() transferData: any) {
    return this.walletService.transferAssets(transferData);
  }
}


---
