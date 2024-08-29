import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookTest } from 'src/entities/BookTest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookTestService extends TypeOrmCrudService<BookTest> {
  constructor(@InjectRepository(BookTest) repo: Repository<BookTest>) {
    super(repo)
  }
}
