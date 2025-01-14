import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Phones } from 'src/entities/Phone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhonesService extends TypeOrmCrudService<Phones> {
  constructor(@InjectRepository(Phones) repo: Repository<Phones>) {
    super(repo);
  }
}
