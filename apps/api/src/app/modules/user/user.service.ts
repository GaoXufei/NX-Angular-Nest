import {
  Injectable,
  BadRequestException,
  NotFoundException
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto, UpdatePasswordDto } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  /**
   * 添加用户
   * @param data 用户名/密码
   */
  async store(data: UserDto) {
    const { username } = data;
    // 判断用户是否已存在
    const user = await this.userRepository.findOne({ username });
    if (user) throw new BadRequestException('用户已存在');
    // 正常业务
    const entity = this.userRepository.create(data);
    await this.userRepository.save(entity);
    return entity;
  }

  /**
   * 根据id更新用户密码
   * @param id 用户id
   * @param data 用户账号密码
   */
  async updatePasswordById(id: number, data: UpdatePasswordDto) {
    // 解构用户输入
    const { password, newPassword } = data;
    // 查找用户实体
    const entity = await this.userRepository.findOne(id);
    // 如果没有该用户实体，则抛出异常
    if (!entity) throw new NotFoundException('没有找到该用户');
    // 对比密码
    const isPass = await entity.comparePassword(password);
    // 如果密码与数据库中的数据没有对应上
    if (!isPass) throw new BadRequestException('密码错误');
    // 如果对比通过，则更新密码
    entity.password = newPassword;
    // 保存实体
    return await this.userRepository.save(entity);
  }

  /**
   * 根据用户名查找用户数据
   * @param username 用户名
   */
  async findByName(username: string) {
    const entity = await this.userRepository.findOne({ username });
    return entity;
  }
}
