import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TopicEntity } from './topic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TopicDto } from './topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(TopicEntity)
    private readonly topicRepository: Repository<TopicEntity>
  ) {}

  async store(data: TopicDto) {
    const entity = this.topicRepository.create(data);
    return await this.topicRepository.save(entity);
  }

  async topic() {
    const entity = await this.topicRepository.find();
    return entity;
  }
}
