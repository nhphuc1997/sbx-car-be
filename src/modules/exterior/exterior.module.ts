import { Module } from '@nestjs/common';
import { ExteriorService } from './exterior.service';
import { ExteriorController } from './exterior.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exterior } from 'src/entities/Exterior';

@Module({
  imports: [TypeOrmModule.forFeature([Exterior])],
  controllers: [ExteriorController],
  providers: [ExteriorService],
})
export class ExteriorModule { }
