import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/entities/Card.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BotTelegram } from 'src/entities/BotTelegram.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card, BotTelegram]), ConfigModule],
  controllers: [CardController],
  providers: [CardService, ConfigService],
})
export class CardModule {}
