import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileRepository } from 'src/repositories/profile.repository';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
import { ProfileEntity } from 'src/entities/profile.entity';
import { UserEntity } from 'src/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepository)
    private readonly profileRepository: ProfileRepository,
    private readonly userService: UserService,
  ) {}

  async updateProfileInfo(profileInfo: UserDTO, userId: number) {
    const user = await this.userService.findOneById(userId);
    if (user) {
      // let { ...userData } = user;
      user.ci = profileInfo.ci;
      user.name = profileInfo.name;
      user.lastname = profileInfo.lastName;
      user.email = profileInfo.email;
      if (!user.profile) {
        user.profile = this.profileRepository.create();
      }
      user.profile.address = profileInfo.address;

      const updatedUser = await this.userService.updateUser(user);
      console.log('UPDATED_USER: ', updatedUser);
      return updatedUser;
    }
    return null;
  }
}
