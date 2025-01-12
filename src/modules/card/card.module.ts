import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from 'src/entities/Card.entity';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Card]), ConfigModule],
  controllers: [CardController],
  providers: [CardService, ConfigService],
})
export class CardModule {}
