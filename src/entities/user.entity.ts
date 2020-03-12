import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Timestamp,
  BeforeInsert,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { hashSync } from 'bcrypt';
import { RoleEntity } from './role.entity';
import { AilmentEntity } from './ailment.entity';
import { DiseaseEntity } from './disease.entity';
import { ProfileEntity } from './profile.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column({ name: 'name', length: 191, nullable: false })
  name: string;
  @Column({ name: 'lastname', length: 191, nullable: false })
  lastname: string;
  @Column({ name: 'ci', length: 11, nullable: false, unique: true })
  ci: string;
  @Column({ name: 'email', length: 191, nullable: false })
  email: string;
  @Column({ name: 'username', length: 191, nullable: false, unique: true })
  username: string;
  @Column({ name: 'password', length: 255, nullable: false })
  password: string;
  @Column({name: 'qrcode', length: 1000000, nullable: true})
  qrcode: string;
  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Timestamp;
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Timestamp;

  @OneToOne(type => ProfileEntity, profile => profile.user, {cascade: true})
  @JoinColumn()
  profile: ProfileEntity

  @ManyToOne(
    type => RoleEntity,
    role => role.users,
  )
  role: RoleEntity;

  @OneToMany(
    type => AilmentEntity,
    ailment => ailment.user,
  )
  ailments: AilmentEntity[];

  @OneToMany(
    type => DiseaseEntity,
    disease => disease.user,
  )
  diseases: DiseaseEntity[];

  @BeforeInsert()
  encryptPassword() {
    this.password = hashSync(this.password, 10);
  }
}
