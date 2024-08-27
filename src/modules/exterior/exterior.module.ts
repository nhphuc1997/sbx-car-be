import { Module } from '@nestjs/common';
import { ExteriorService } from './exterior.service';
import { ExteriorController } from './exterior.controller';

@Module({
  controllers: [ExteriorController],
  providers: [ExteriorService],
})
export class ExteriorModule {}
