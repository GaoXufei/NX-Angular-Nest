import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'topic' })
export class TopicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('longtext', { nullable: true })
  content: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  // 关联项
  @ManyToOne(
    type => UserEntity,
    user => user.topics
  )
  user: UserEntity;
}
