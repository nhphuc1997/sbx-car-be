import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { Crud, CrudController } from '@dataui/crud';
import { Order } from 'src/entities/Order.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("ORDER API")
@Crud({
  model: { type: Order },
  routes: { only: ["createOneBase"] }
})
@Controller('sbx-car/backend/orders')
export class OrderController implements CrudController<Order> {
  constructor(public readonly service: OrderService) { }
}
