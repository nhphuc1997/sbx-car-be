import { Controller } from '@nestjs/common';
import { ExteriorService } from './exterior.service';

@Controller('exterior')
export class ExteriorController {
  constructor(private readonly exteriorService: ExteriorService) {}
}
