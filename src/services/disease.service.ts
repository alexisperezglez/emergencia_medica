import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiseaseRepository } from 'src/repositories/disease.repository';
import { UserService } from './user.service';
import { DiseaseDTO } from 'src/dto/disease.dto';
import { DiseaseEntity } from 'src/entities/disease.entity';

@Injectable()
export class DiseaseService {
  constructor(
    @InjectRepository(DiseaseRepository) private readonly diseaseRepository: DiseaseRepository,
    private readonly userService: UserService,
  ) {}

  async saveDiseases(userId: number, disease: DiseaseDTO) {
    const user = await this.userService.findOneById(userId);

    const item = this.diseaseRepository.create({
      name: disease.disease,
      observations: disease.observations,
      user,
    });

    return await this.diseaseRepository.save(item);
  }

  async removeDisease(diseaseId: number) {
    return await this.diseaseRepository.delete(diseaseId);
  }

  async findDiseasesByUser(userId: number) {
    return await this.diseaseRepository.find({user: {id: userId}});
  }
}
