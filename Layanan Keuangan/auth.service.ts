import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  validateBiometric(inputBiometricHash: string, storedHash: string): boolean {
    return inputBiometricHash === storedHash;
  }

  generateMultiSigKey(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}


---
