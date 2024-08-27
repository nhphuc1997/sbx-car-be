import { TypeOrmCrudService } from '@dataui/crud-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Video } from 'src/entities/Video';
import { Repository } from 'typeorm';

@Injectable()
export class VideoService extends TypeOrmCrudService<Video> {
  constructor(@InjectRepository(Video) repo: Repository<Video>) {
    super(repo)
  }
}
