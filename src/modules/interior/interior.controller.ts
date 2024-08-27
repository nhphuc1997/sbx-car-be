import { Controller } from '@nestjs/common';
import { InteriorService } from './interior.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Interior } from 'src/entities/Interior';

@ApiTags("INTERIOR API")
@Crud({
  model: { type: Interior },
  routes: { only: ["getManyBase"] }
})
@Controller('sbx-car/backend/interiors')
export class InteriorController implements CrudController<Interior> {
  constructor(public readonly service: InteriorService) { }
}
