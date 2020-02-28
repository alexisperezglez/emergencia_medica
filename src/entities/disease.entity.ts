import { ManyToOne, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { ProfileEntity } from './profile.entity';

@Entity('disease')
export class DiseaseEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column({ name: 'name', length: 191, nullable: false })
  name: string;
  @Column({ name: 'observations', length: 500 })
  observations: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Timestamp;

  @ManyToOne(
    type => UserEntity,
    user => user.diseases,
  )
  user: UserEntity;

  @ManyToOne(
    type => ProfileEntity,
    profile => profile.familyRecords,
  )
  profile: ProfileEntity;
}
