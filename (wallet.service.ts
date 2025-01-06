import { Injectable } from '@nestjs/common';

@Injectable()
export class WalletService {
  private wallets = new Map<string, any>();

  async createWallet(userId: string) {
    const wallet = {
      userId,
      balance: { piCoin: 0, eth: 0, btc: 0 },
      nft: [],
      multiSig: [],
    };
    this.wallets.set(userId, wallet);
    return wallet;
  }

  async getWallet(userId: string) {
    return this.wallets.get(userId);
  }

  async transferAssets(data: {
    fromUserId: string;
    toUserId: string;
    amount: number;
    currency: string;
  }) {
    const senderWallet = this.wallets.get(data.fromUserId);
    const receiverWallet = this.wallets.get(data.toUserId);

    if (!senderWallet || !receiverWallet) {
      throw new Error('Wallet not found');
    }

    if (senderWallet.balance[data.currency] < data.amount) {
      throw new Error('Insufficient balance');
    }

    senderWallet.balance[data.currency] -= data.amount;
    receiverWallet.balance[data.currency] += data.amount;

    return { status: 'success', transaction: data };
  }
}


---
