import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
import { BotModule } from './bot/bot.module';
@Module({
  imports:
    [MongooseModule.forRoot(process.env.MONGO_URI),
      UserModule,
      AuthModule,
      ArticleModule,
      BotModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
