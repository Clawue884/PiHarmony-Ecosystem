
import { Injectable } from '@nestjs/common';

@Injectable()
export class BankService {
  private accounts = new Map<string, any>();

  async createAccount(userId: string) {
    if (this.accounts.has(userId)) {
      throw new Error('Account already exists');
    }
    const account = {
      userId,
      balance: { piCoin: 0, eth: 0, btc: 0 },
      loans: [],
    };
    this.accounts.set(userId, account);
    return account;
  }

  async deposit(data: { userId: string; amount: number; currency: string }) {
    const account = this.accounts.get(data.userId);
    if (!account) {
      throw new Error('Account not found');
    }
    account.balance[data.currency] += data.amount;
    return account;
  }

  async withdraw(data: { userId: string; amount: number; currency: string }) {
    const account = this.accounts.get(data.userId);
    if (!account) {
      throw new Error('Account not found');
    }
    if (account.balance[data.currency] < data.amount) {
      throw new Error('Insufficient balance');
    }
    account.balance[data.currency] -= data.amount;
    return account;
  }

  async transfer(data: { fromUserId: string; toUserId: string; amount: number; currency: string }) {
    const senderAccount = this.accounts.get(data.fromUserId);
    const receiverAccount = this.accounts.get(data.toUserId);

    if (!senderAccount || !receiverAccount) {
      throw new Error('Account not found');
    }

    if (senderAccount.balance[data.currency] < data.amount) {
      throw new Error('Insufficient balance');
    }

    senderAccount.balance[data.currency] -= data.amount;
    receiverAccount.balance[data.currency] += data.amount;
    return { status: 'success', transaction: data };
  }

  async getAccount(userId: string) {
    return this.accounts.get(userId);
  }
}


---
