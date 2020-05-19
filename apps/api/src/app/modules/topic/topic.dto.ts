import { IsNotEmpty, IsString } from 'class-validator';

export class TopicDto {
  @IsNotEmpty({ message: 'title不能为空！' })
  @IsString({ message: 'title必须为字符串' })
  title: string;

  @IsNotEmpty({ message: 'content不能为空！' })
  @IsString({ message: 'content必须为字符串' })
  content: string;
}
