import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

import { TypeOrmConfig } from '@api/typeorm.config';

import { UserEntity } from '@api/src/app/modules/user/user.entity';
import { AuthModule } from './modules/auth/auth.module';
// entities
const ENTITIES = [UserEntity];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...TypeOrmConfig,
      entities: [...ENTITIES]
    }),
    UserModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
