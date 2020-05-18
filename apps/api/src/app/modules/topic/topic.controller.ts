import { Controller, Post, Body, Get } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicDto } from './topic.dto';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  async store(@Body() data: TopicDto) {
    const entity = await this.topicService.store(data);
    return entity;
  }

  @Get()
  async topics() {
    const entity = await this.topicService.topic();
    return entity;
  }
}
