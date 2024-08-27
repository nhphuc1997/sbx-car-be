import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Video } from 'src/entities/Video';
import { VideoService } from './video.service';

@ApiTags("VIDEO API")
@Crud({
  model: { type: Video },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('sbx-car/backend/videos')
export class VideoController implements CrudController<Video> {
  constructor(public readonly service: VideoService) { }
}
