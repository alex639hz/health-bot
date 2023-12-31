// import { Roles } from '../auth/decorators/roles.decorator';
// import { ResetPasswordDto } from './dto/reset-password.dto';
// import { CreateForgotPasswordDto } from './dto/create-forgot-password.dto';
// import { Request } from 'express';
// import { LoginUserDto } from './dto/login-user.dto';
import { Controller, Get, Post, Body, UseGuards, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateBotDto } from './dto/create-bot.dto';
// import { VerifyUuidDto } from './dto/verify-uuid.dto';
import { BotService } from './bot.service';
// import { AuthGuard, PassportModule } from '@nestjs/passport';
// import { RefreshAccessTokenDto } from './dto/refresh-access-token.dto';
// import {
// ApiCreatedResponse,
//   ApiOkResponse,
//   ApiUseTags,
//   ApiBearerAuth,
//   ApiImplicitHeader,
//   ApiOperation,
// } from '@nestjs/swagger';
// import { RolesGuard } from 'src/auth/guards/roles.guard';

// @ApiUseTags('User')
// @UseGuards(RolesGuard)
@Controller('user')
export class BotController {
  constructor(
    private readonly botService: BotService,
  ) { }

  // @HttpCode(HttpStatus.CREATED)
  // @ApiOperation({ title: 'Register user', })
  // @ApiCreatedResponse({})
  // @Post()
  // async create(@Body() createBotDto: CreateBotDto) {
  //   return await this.botService.create(createBotDto);
  // }
}
