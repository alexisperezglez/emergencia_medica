import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AppController } from './app.controller';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { DiseaseController } from './controllers/disease.controller';
import { AilmentController } from './controllers/ailment.controller';
import { ProfileController } from './controllers/profile.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { RoleService } from './services/role.service';
import { AilmentService } from './services/ailment.service';
import { DiseaseService } from './services/disease.service';
import { ProfileService } from './services/profile.service';
import { JwtStrategy } from './auth/jwt.strategy';

import { UserRepository } from './repositories/user.repository';
import { RoleRepository } from './repositories/role.repository';
import { AilmentRepository } from './repositories/ailment.repository';
import { DiseaseRepository } from './repositories/disease.repository';
import { ProfileRepository } from './repositories/profile.repository';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client/build'),
    }),
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([UserRepository, RoleRepository, AilmentRepository, DiseaseRepository, ProfileRepository]),
    PassportModule,
    JwtModule.register({
      secret: 'secretkey',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController, UserController, DiseaseController, AilmentController, ProfileController],
  providers: [AppService, UserService, AuthService, JwtStrategy, RoleService, AilmentService, DiseaseService, ProfileService],
})
export class AppModule {}
