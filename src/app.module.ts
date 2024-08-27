import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerModule } from './modules/banner/banner.module';
import { CarModule } from './modules/car/car.module';
import { InteriorModule } from './modules/interior/interior.module';
import { ExteriorModule } from './modules/exterior/exterior.module';
import { VideoModule } from './modules/video/video.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('APP_DB_HOST'),
        port: +config.get('APP_DB_PORT'),
        username: config.get('APP_DB_USERNAME'),
        password: config.get('APP_DB_PASSWORD'),
        database: config.get('APP_DB_DATABASE'),
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      })
    }),
    BannerModule,
    CarModule,
    InteriorModule,
    ExteriorModule,
    VideoModule,
  ],
})
export class AppModule { }
