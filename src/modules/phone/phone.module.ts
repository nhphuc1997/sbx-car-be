import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Phones } from 'src/entities/Phone.entity';
import { PhonesController } from './phone.controller';
import { PhonesService } from './phone.service';

@Module({
  imports: [TypeOrmModule.forFeature([Phones]), ConfigModule],
  controllers: [PhonesController],
  providers: [PhonesService, ConfigService],
})
export class PhonesModule {}
