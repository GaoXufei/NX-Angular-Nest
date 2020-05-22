import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  ValidationPipe,
  UsePipes,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { TopicService } from './topic.service';
import { TopicDto } from './topic.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDecorator } from '../../core/decorators/user.decorator';
import { UserDto } from '../user/user.dto';

@Controller('topic')
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Post()
  @UseGuards(AuthGuard()) // 添加用户签权守卫
  @UsePipes(ValidationPipe) // 管道中对提交数据进行验证
  async store(@Body() data: TopicDto, @UserDecorator() user: UserDto) {
    const entity = await this.topicService.store(data, user);
    return entity;
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  async topics() {
    const entity = await this.topicService.topic();
    return entity;
  }
}
