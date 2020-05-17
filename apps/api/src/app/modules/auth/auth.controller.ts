import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from '../user/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserDecorator } from '../../core/decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: UserDto) {
    const entity = await this.authService.login(data);
    return entity;
  }

  @Get('test')
  @UseGuards(AuthGuard())
  async test(@UserDecorator() user) {
    console.log(user);
    return { message: 'OK' };
  }
}
