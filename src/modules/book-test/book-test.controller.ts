import { Controller } from '@nestjs/common';
import { BookTestService } from './book-test.service';
import { Crud, CrudController } from '@dataui/crud';
import { BookTest } from 'src/entities/BookTest.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BOOK-TEST API')
@Controller('sbx-car/backend/book-tests')
@Crud({
  model: { type: BookTest },
  routes: {
    only: ["createOneBase"]
  }
})
export class BookTestController implements CrudController<BookTest> {
  constructor(public readonly service: BookTestService) { }
}
