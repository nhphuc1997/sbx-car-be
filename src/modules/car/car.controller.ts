import { Controller } from '@nestjs/common';
import { CarService } from './car.service';
import { Crud, CrudController } from '@dataui/crud';
import { Car } from 'src/entities/Car.entity';

@Controller('car')
@Crud({
  model: { type: Car },
  routes: {
    only: ["getOneBase", "getManyBase"]
  }
})
export class CarController implements CrudController<Car> {
  constructor(public readonly service: CarService) { }
}
