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

  async saveDiseases(userId: number, diseases: DiseaseDTO[]) {
    const user = await this.userService.findOneById(userId);
    const userDiseases: DiseaseEntity[] = [];

    diseases.map(disease => {
      const item = this.diseaseRepository.create({
        name: disease.disease,
        observations: disease.observations,
        user,
      });
      userDiseases.push(item);
    });

    return await this.diseaseRepository.save(userDiseases);
  }

  async removeDisease(diseaseId: number) {
    return await this.diseaseRepository.delete(diseaseId);
  }
}
