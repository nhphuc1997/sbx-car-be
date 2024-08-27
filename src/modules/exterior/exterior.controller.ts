import { Controller } from '@nestjs/common';
import { ExteriorService } from './exterior.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Exterior } from 'src/entities/Exterior';

@ApiTags("EXTERIOR API")
@Crud({
  model: { type: Exterior },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('sbx-car/backend/exteriors')
export class ExteriorController implements CrudController<Exterior> {
  constructor(public readonly service: ExteriorService) { }
}
