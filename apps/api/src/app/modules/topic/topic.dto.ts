import { IsNotEmpty } from 'class-validator';

export class TopicDto {
  @IsNotEmpty({ message: '不能为空！' })
  title: string;
  content: string;
}
