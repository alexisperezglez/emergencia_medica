import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
      try {
          const user = await this.usersService.findOneByUsername(username);
          if (user) {
            const compare = compareSync(pass, user.password);
            if (compare) {
              const { password, ...result } = user;
              return result;
            }
          }
          return null;
      } catch (error) {
          console.log('ERROR: ', error);
          return null;
      }
  }

  async login(user: any) {
    const {username, password} = user;
    const validUser = await this.validateUser(username, password);
    if (validUser) {
        const { password, ...payload } = validUser;
        /* const payload = {
            username: validUser.username,
            userId: validUser.id,
            sub: validUser.id,
            role: validUser.role,
            name: validUser.name,
            lastname: validUser.lastname,
            ci: validUser.ci,
            email: validUser.email,
        }; */
        console.log('LOGGED_USER: ', payload);
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
    return {error: 'user not found, bad credentials'};
  }
}
