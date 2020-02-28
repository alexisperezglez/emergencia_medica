import { AilmentEntity } from 'src/entities/ailment.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AilmentEntity)
export class AilmentRepository extends Repository<AilmentEntity> {}
