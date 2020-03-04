import { Controller, Get, Post, UseGuards, Req, Request, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiTags('auth')
@ApiBearerAuth()
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('login')
  async login(@Body() user: any, @Res() res) {
    // return this.authService.login(user);
    try {
      const auth = await this.authService.login(user);
      if (!auth.error) {
        res.status(HttpStatus.OK).send(auth);
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({ user, error: auth.error });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ user, error });
    }
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async profile(@Req() req, @Res() res) {
    const { userId, ...others } = req.user;
    const user = await this.userService.findOneById(userId);
    if (user) {
      res.status(HttpStatus.OK).send({ user });
    } else {
      res
        .status(HttpStatus.NOT_FOUND)
        .send({ user: null, message: 'El usuario no existe.' });
    }
  }

  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token',
  })
  @UseGuards(AuthGuard('jwt'))
  @Get('refreshToken')
  async refreshToken(@Req() req, @Res() res) {
    const { userId, ...others } = req.user;
    const user = await this.userService.findOneById(userId);
    const auth = await this.authService.refreshToken(user);
    if (!auth.error) {
      res.status(HttpStatus.OK).send(auth);
    } else {
      res.status(HttpStatus.BAD_REQUEST).send({ user, error: auth.error });
    }
  }
}
