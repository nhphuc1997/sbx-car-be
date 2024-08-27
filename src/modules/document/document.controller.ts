import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@dataui/crud';
import { Document } from 'src/entities/Document';
import { DocumentService } from './document.service';

@ApiTags("DOCUMENT API")
@Crud({
  model: { type: Document },
  routes: {
    only: ["getManyBase"]
  }
})
@Controller('sbx-car/backend/documents')
export class DocumentController implements CrudController<Document> {
  constructor(public readonly service: DocumentService) { }
}
