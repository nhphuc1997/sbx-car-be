import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Banner } from 'src/entities/Banner.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Banner])
  ],
  controllers: [BannerController],
  providers: [BannerService],
})
export class BannerModule { }
