import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from '@api/typeorm.config';

import { UserModule } from './modules/user/user.module';
import { UserEntity } from '@api/src/app/modules/user/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { TopicModule } from './modules/topic/topic.module';
import { TopicEntity } from './modules/topic/topic.entity';
// entities
const ENTITIES = [UserEntity, TopicEntity];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...TypeOrmConfig,
      entities: [...ENTITIES]
    }),
    UserModule,
    AuthModule,
    TopicModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
