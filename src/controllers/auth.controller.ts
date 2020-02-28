import { Controller, Get, Post, UseGuards, Req, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() user: any) {
    return this.authService.login(user);
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
