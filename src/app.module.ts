import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BannerModule } from './modules/banner/banner.module';
import { CarModule } from './modules/car/car.module';
import { InteriorModule } from './modules/interior/interior.module';
import { ExteriorModule } from './modules/exterior/exterior.module';
import { VideoModule } from './modules/video/video.module';
import { DocumentModule } from './modules/document/document.module';
import { MechanicalModule } from './modules/mechanical/mechanical.module';
import { CategoryModule } from './modules/category/category.module';
import { OrderModule } from './modules/order/order.module';
import { BookTestModule } from './modules/book-test/book-test.module';
import { CardModule } from './modules/card/card.module';

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
      }),
    }),
    BannerModule,
    CarModule,
    InteriorModule,
    ExteriorModule,
    VideoModule,
    DocumentModule,
    MechanicalModule,
    CategoryModule,
    OrderModule,
    BookTestModule,
    CardModule,
  ],
})
export class AppModule {}
