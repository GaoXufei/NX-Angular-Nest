import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from '@api/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: JwtConfig.secret,
      signOptions: {
        expiresIn: '12h'
      }
    }),
    PassportModule.register({
      defaultStrategy: 'jwt'
    }),
    forwardRef(() => UserModule)
  ],

  providers: [AuthService, JwtStrategy],
  exports: [JwtModule, PassportModule]
})
export class AuthModule {}
