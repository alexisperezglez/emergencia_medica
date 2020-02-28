import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, OneToOne, OneToMany } from 'typeorm';
import { DiseaseEntity } from './disease.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column({ name: 'address', length: 191, nullable: false })
  address: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Timestamp;

  @OneToMany(type => DiseaseEntity, disease => disease.profile)
  familyRecords: DiseaseEntity[];
}
