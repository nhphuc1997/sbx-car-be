import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Phones } from 'src/entities/Phone.entity';
import { PhonesService } from './phone.service';

@ApiTags('PHONE API')
@Crud({
  model: { type: Phones },
  routes: { only: ['getManyBase', 'getOneBase'] },
})
@Controller('sbx-car/backend/phones')
export class PhonesController implements CrudController<Phones> {
  constructor(public readonly service: PhonesService) {}
}
