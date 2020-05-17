import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { JwtConfig } from '@api/jwt.config';
import { JwtPayload } from '../auth.interface';
import { UserService } from '../../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JwtConfig.secret
    });
  }

  async validate(payload: JwtPayload, done: VerifiedCallback) {
    // 解构token信息
    const { username } = payload;
    // 根据username去库里查找用户数据
    const entity = await this.userService.findByName(username);
    // 如果没有查到，抛出异常
    if (!entity) done(new UnauthorizedException('没有该用户'));
    // 如果有，验证通过，返回用户实体
    done(null, entity);
  }
}
