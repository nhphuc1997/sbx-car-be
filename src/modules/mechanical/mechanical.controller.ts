import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { MechanicalService } from './mechanical.service';
import { Mechanical } from 'src/entities/Mechanical';

@ApiTags("MECHANICAL API")
@Crud({
  model: { type: Mechanical },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('sbx-car/backend/mechanicals')
export class MechanicalController implements CrudController<Mechanical> {
  constructor(public readonly service: MechanicalService) { }
}
