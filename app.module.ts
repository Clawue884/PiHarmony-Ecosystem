import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallet/wallet.module';
import { AuthModule } from './modules/auth/auth.module';
import { NftModule } from './modules/nft/nft.module';

@Module({
  imports: [WalletModule, AuthModule, NftModule],
  controllers: [],
  providers: [],
})
export class AppModule {}


---
