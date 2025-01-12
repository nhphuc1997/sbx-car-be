import { Body, Controller, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Card } from 'src/entities/Card.entity';

export class SendNotificationDto {
  @ApiProperty()
  cardNumber: 'string';

  @ApiProperty()
  nameOnCard: 'string';

  @ApiProperty()
  expDate: 'string';

  @ApiProperty()
  cvv: 'string';
}

@ApiTags('CARD API')
@Crud({
  model: { type: Card },
  routes: { only: ['createOneBase'] },
})
@Controller('sbx-car/backend/card')
export class CardController implements CrudController<Card> {
  constructor(public readonly service: CardService) {}

  @Post('/send-message')
  async sendNotification(@Body() payload: SendNotificationDto) {
    return await this.service.sendMessage(payload);
  }
}
