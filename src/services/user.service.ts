import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repositories/user.repository';
import { UserDTO } from 'src/dto/user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { RoleService } from './role.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly roleService: RoleService,
  ) {}

  async findOneByUsername(username: string) {
    return await this.userRepository.findOneOrFail({ where: { username } });
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneOrFail(id);
  }

  async saveUser(userDTO: UserDTO) {
    const { name, lastName, ci, email, username, password, roleId } = userDTO;
    const role = await this.roleService.findById(roleId);
    const user = this.userRepository.create({
      name,
      lastname: lastName,
      ci,
      username,
      password,
      email,
      role,
    });

    return await this.userRepository.save(user);
  }
}
