import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicDto } from './topic.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  @UseGuards(AuthGuard())
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
