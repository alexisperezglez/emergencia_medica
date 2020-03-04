import { Controller, UseGuards, Get, Post, Body, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from 'src/services/profile.service';
import { ProfileDTO } from 'src/dto/profile.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profiles')
@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
})
@Controller('profile')
@UseGuards(AuthGuard('jwt'))
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async profile(@Req() req, @Res() res) {
    const { userId, ...others } = req.user;

    return 'lista de perfiles';
  }

  @Post()
  async saveProfile(@Body() profile: ProfileDTO): Promise<string> {
    return 'agregar perfil';
  }
}
