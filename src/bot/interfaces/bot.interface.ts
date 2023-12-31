import { Document } from 'mongoose';

export interface Bot extends Document {
  fullName: string;
  email: string;
  password: string;
  roles: [string];
  verification: string;
  verified: boolean;
  verificationExpires: Date;
  loginAttempts?: number;
  blockExpires?: Date;
  bankAccountNumber?: string;
  bankAccountName?: string;
}
