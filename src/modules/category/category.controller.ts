import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Category } from 'src/entities/Category.entity';
import { CategoryService } from './category.service';

@ApiTags("CATEGORY API")
@Crud({
  model: { type: Category },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('sbx-car/backend/categories')
export class CategoryController implements CrudController<Category> {
  constructor(public readonly service: CategoryService) { }
}
