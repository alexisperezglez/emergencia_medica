import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Timestamp, OneToMany } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column({ name: 'role', length: 191, nullable: false })
  role: string;
  @Column({ name: 'description', length: 191, nullable: false })
  description: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Timestamp;

  @OneToMany(
    type => UserEntity,
    user => user.role,
  )
  users: UserEntity[];
}
