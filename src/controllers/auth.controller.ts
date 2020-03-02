import { Controller, Get, Post, UseGuards, Req, Request, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any, @Res() res) {
    // return this.authService.login(user);
    try {
      const auth = await this.authService.login(user);
      if(!auth.error) {
        res.status(HttpStatus.OK).send(auth);
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({ user, error: auth.error });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({user, error});
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async profile(@Req() req) {
    return 'profile';
  }

  @Get('refreshToken')
  async refreshToken() {
    return 'refreshToken';
  }
}
