import { Controller } from '@nestjs/common';
import { BannerService } from './banner.service';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Banner } from 'src/entities/Banner.entity';

@ApiTags("BANNER API")
@Crud({
  model: { type: Banner },
  routes: { only: ["getManyBase"] }
})
@Controller('sbx-car/backend/banners')
export class BannerController implements CrudController<Banner> {
  constructor(public readonly service: BannerService) { }
}
