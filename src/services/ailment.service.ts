import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AilmentRepository } from 'src/repositories/ailment.repository';
import { AilmentDTO } from 'src/dto/ailment.dto';
import { UserService } from './user.service';
import { AilmentEntity } from 'src/entities/ailment.entity';

@Injectable()
export class AilmentService {
  constructor(
    @InjectRepository(AilmentRepository) private readonly ailmentRepository: AilmentRepository,
    private readonly userService: UserService,
  ) {}

  async saveAilments(userId: number, ailments: AilmentDTO[]) {
    const user = await this.userService.findOneById(userId);
    let userAilments = [];

    ailments.map(ailment => {
      const item = this.ailmentRepository.create({
        name: ailment.ailment,
        observations: ailment.observations,
        user,
      });
      userAilments.push(item);
    });

    return await this.ailmentRepository.save(userAilments);
  }

  async removeAilment(ailmentId: number) {
    return await this.ailmentRepository.delete(ailmentId);
  }
}
