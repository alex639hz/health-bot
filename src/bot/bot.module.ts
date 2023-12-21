// import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from './schemas/user.schema';
import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
// import { UserService } from './user.service';
// import { AuthModule } from 'src/auth/auth.module';
// import { ForgotPasswordSchema } from './schemas/forgot-password.schema';
// import { ForgotPasswordSchema } from './schemas/forgot-password.schema';
import * as TelegramBot from 'node-telegram-bot-api';

// replace the value below with the Telegram token you receive from @BotFather
const token = '5962551933:AAGK_Fh2eyRoFT8IGfmGjo-4TN0qsdlf-MU';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  console.log(`received: ${JSON.stringify(msg)}`)
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: 'Bot', schema: UserSchema }]),
    // MongooseModule.forFeature([{ name: 'ForgotPassword', schema: ForgotPasswordSchema}]),
    // AuthModule,
  ],
  // controllers: [UserController],
  // providers: [UserService],
})
export class BotModule { }
