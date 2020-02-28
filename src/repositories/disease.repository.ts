import { EntityRepository, Repository } from 'typeorm';
import { DiseaseEntity } from 'src/entities/disease.entity';

@EntityRepository(DiseaseEntity)
export class DiseaseRepository extends Repository<DiseaseEntity> {}
