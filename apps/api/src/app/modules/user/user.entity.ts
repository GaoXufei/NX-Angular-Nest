import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { TopicEntity } from '../topic/topic.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  username: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  // 关联项
  @OneToMany(
    type => TopicEntity,
    topic => topic.user
  )
  topics: TopicEntity[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  /**
   * 比对数据库中的密码
   * @param password 新填入的密码
   */
  async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
