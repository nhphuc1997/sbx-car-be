import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/entities/Car.entity';
import { Interior } from 'src/entities/Interior';
import { Exterior } from 'src/entities/Exterior';
import { Video } from 'src/entities/Video';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Car,
      Interior,
      Exterior,
      Document,
      Video
    ])
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule { }
