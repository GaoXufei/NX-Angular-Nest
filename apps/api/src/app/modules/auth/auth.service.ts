import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/user.dto';
import { JwtPayload } from './auth.interface';
import { JwtService } from '@nestjs/jwt';
import { authErrorProcess } from '../../core/public/error';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * 用户登录
   * @param data 用户名密码
   */
  async login(data: UserDto) {
    // 结构用户输入
    const { username, password } = data;
    // 通过用户service根据username找到该实体
    const entity = await this.userService.findByName(username);
    // 如果找不到实体，说明没有该用户
    if (!entity)
      return authErrorProcess({
        msg: '用户不存在',
        status: 'failed',
        code: 400
      });
    // 如果找到该实体
    // 对比密码
    const isPass = await entity.comparePassword(password);
    // 如果密码不匹配
    if (!isPass)
      return authErrorProcess({
        msg: '密码不匹配',
        status: 'failed',
        code: 400
      });

    // 进行签发
    const { id } = entity;
    const payload = { id, username };
    const token = this.signToken(payload);

    return {
      ...authErrorProcess({ msg: '登录成功', status: 'success', code: 200 }),
      ...payload,
      token
    };
  }

  // 签发token
  signToken(data: JwtPayload) {
    return this.jwtService.sign(data);
  }
}
