import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { TopicEntity } from './topic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TopicDto } from './topic.dto';
import { UserDto } from '../user/user.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(TopicEntity)
    private readonly topicRepository: Repository<TopicEntity>
  ) {}

  /**
   * 添加文章
   * @param data 用户输入的数据
   * @param user 从token中解析出的用户数据
   */
  async store(data: TopicDto, user: UserDto) {
    // 创建文章
    const entity = this.topicRepository.create(data);
    // 将用户信息与文章信息合并保存
    return await this.topicRepository.save({
      ...entity,
      user
    });
  }

  /**
   * 查询文章
   */
  async topic() {
    const entity = await this.topicRepository.find({
      relations: ['user']
    });
    return entity;
  }
}
