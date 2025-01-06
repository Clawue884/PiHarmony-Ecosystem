import { Injectable } from '@nestjs/common';

@Injectable()
export class NftService {
  private nftCollection = [];

  createNft(userId: string, nftData: any) {
    const nft = { ...nftData, owner: userId, id: this.nftCollection.length + 1 };
    this.nftCollection.push(nft);
    return nft;
  }

  getUserNfts(userId: string) {
    return this.nftCollection.filter((nft) => nft.owner === userId);
  }
}


---
