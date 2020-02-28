import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, Timestamp, UpdateDateColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('ailment')
export class AilmentEntity {
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
    user => user.ailments,
  )
  user: UserEntity;
}
