import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MechanicalController } from './mechanical.controller';
import { MechanicalService } from './mechanical.service';
import { Mechanical } from 'src/entities/Mechanical';

@Module({
  imports: [TypeOrmModule.forFeature([Mechanical])],
  controllers: [MechanicalController],
  providers: [MechanicalService],
})
export class MechanicalModule { }
