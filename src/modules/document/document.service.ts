import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from 'src/entities/Document';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentService extends TypeOrmCrudService<Document> {
  constructor(@InjectRepository(Document) repo: Repository<Document>) {
    super(repo);
  }
}
