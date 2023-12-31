import { MongooseModule } from '@nestjs/mongoose';
import { BotSchema } from './schemas/user.schema';
import { Module } from '@nestjs/common';
// import { IStep, IProgram, EnumStepMode } from './bot.runtime';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Bot', schema: BotSchema }]),
  ],
  // controllers: [BotController],
  // providers: [BotService],
})
export class BotModule { }

