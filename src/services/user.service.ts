import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/repositories/user.repository';
import { UserDTO } from 'src/dto/user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { RoleService } from './role.service';
import * as QRcode from 'qrcode';
import * as Cryptr from 'cryptr';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
    private readonly roleService: RoleService,
  ) {}

  async findOneByUsername(username: string) {
    return await this.userRepository.findOneOrFail({ where: { username }, relations: ['role', 'profile'] });
  }

  async findOneById(id: number) {
    return await this.userRepository.findOneOrFail(id, {relations: ['role', 'profile', 'ailments']});
  }

  async findOneByCI(ci: string) {
    return await this.userRepository.findOneOrFail({ where: { ci } });
  }

  async findByCIandUsername(username: string, ci: string) {
    return await this.userRepository.find({ where: [{ username }, { ci }] });
  }

  async validateUser(userDTO: UserDTO) {
    const {username, ci} = userDTO;
    const users = await this.findByCIandUsername(username, ci);
    console.log('USERS: ', users);
    if (users.length > 0) {
      let found: boolean = false;
      let pos = 0;
      do {
        console.log('USER_POS: ', users[pos]);
        if (users[pos].ci === ci) {
          found = true;
          return {error: 'ci'};
        } else if (users[pos].username === username) {
          found = true;
          return {error: 'nombre de usuario'};
        }
        pos++;
      } while(!found && pos < users.length);
    }
    return null;
  }

  async saveUser(userDTO: UserDTO) {
    const { name, lastName, ci, email, username, password, roleId } = userDTO;
    const cryptr = new Cryptr('secretkey');
    const enc = cryptr.encrypt(ci);
    const dec = cryptr.decrypt(enc, 'secretkey');
    const qrcode = await QRcode.toDataURL('http://localhosthost:3000/profile/qr?ci=' + enc);
    const role = await this.roleService.findById(roleId);
    const user = this.userRepository.create({
      name,
      lastname: lastName,
      ci,
      username,
      password,
      email,
      role,
      qrcode,
    });

    return await this.userRepository.save(user);
  }

  async updateUser(user: UserEntity) {
    try {
      console.log('USER: ', user);
      const { id, ailments, diseases, updatedAt, createdAt, ...data } = user;
      const updatedUser = await this.userRepository.save(user);
      console.log('USERDATA: ', updatedUser);
      // return await this.findOneById(id);
      return updatedUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
