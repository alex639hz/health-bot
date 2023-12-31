// import { ResetPasswordDto } from './dto/reset-password.dto';
// import { Request } from 'express';
// import { AuthService } from '../auth/auth.service';
// import { LoginUserDto } from './dto/login-user.dto';
import { Injectable, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { v4 } from 'uuid';
// import { addHours } from 'date-fns';
// import * as bcrypt from 'bcrypt';
// import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
import { CreateBotDto } from './dto/create-bot.dto';
import { Bot } from './interfaces/bot.interface';

@Injectable()
export class BotService {

  // HOURS_TO_VERIFY = 4;
  // HOURS_TO_BLOCK = 6;
  // LOGIN_ATTEMPTS_TO_BLOCK = 5;

  constructor(
    @InjectModel('User') private readonly userModel: Model<Bot>,
  ) { }

  // ┌─┐┬─┐┌─┐┌─┐┌┬┐┌─┐  ┬ ┬┌─┐┌─┐┬─┐
  // │  ├┬┘├┤ ├─┤ │ ├┤   │ │└─┐├┤ ├┬┘
  // └─┘┴└─└─┘┴ ┴ ┴ └─┘  └─┘└─┘└─┘┴└─
  async create(createChatDto: CreateBotDto): Promise<Bot> {
    const bot = new this.userModel(createChatDto);
    // await this.isEmailUnique(user.email);
    // this.setRegistrationInfo(user);
    await bot.save();
    return this.buildRegistrationInfo(bot);
  }

  private buildRegistrationInfo(bot): any {
    const userRegistrationInfo = {
      fullName: bot.fullName,
      email: bot.email,
      verified: bot.verified,
    };
  }
}