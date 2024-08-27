import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mechanical } from 'src/entities/Mechanical';
import { Repository } from 'typeorm';

@Injectable()
export class MechanicalService extends TypeOrmCrudService<Mechanical> {
  constructor(@InjectRepository(Mechanical) repo: Repository<Mechanical>) {
    super(repo);
  }
}
