import { Module } from '@nestjs/common';
import { BookTestService } from './book-test.service';
import { BookTestController } from './book-test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookTest } from 'src/entities/BookTest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookTest])],
  controllers: [BookTestController],
  providers: [BookTestService],
})
export class BookTestModule { }
