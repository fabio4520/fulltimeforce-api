import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GithubService } from './github/github.service';
import { GithubController } from './github/github.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubService],
})
export class AppModule {}
