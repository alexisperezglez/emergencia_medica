import { EntityRepository, Repository } from 'typeorm';
import { ProfileEntity } from 'src/entities/profile.entity';

@EntityRepository(ProfileEntity)
export class ProfileRepository extends Repository<ProfileEntity> {}
