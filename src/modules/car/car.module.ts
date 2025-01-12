import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from 'src/entities/Car.entity';
import { Category } from 'src/entities/Category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Category])],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
