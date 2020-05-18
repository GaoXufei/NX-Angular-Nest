import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, UpdatePasswordDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 增加用户
  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  async store(@Body() data: UserDto) {
    return this.userService.store(data);
  }

  // 修改密码
  @Put(':id/password')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(@Param('id') id: string, @Body() data: UpdatePasswordDto) {
    const entity = await this.userService.updatePasswordById(id, data);
    return entity;
  }
}
