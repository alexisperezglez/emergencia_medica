import { Controller, UseGuards, Get, Post, Put, Body, Req, Res, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from 'src/services/profile.service';
import { UserDTO } from 'src/dto/user.dto';
import { ProfileDTO } from 'src/dto/profile.dto';
import { ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

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

  @Put()
  async updateProfile(@Body() profileInfo: UserDTO, @Req() req, @Res() res) {
    const { userId } = req.user;
    const user = await this.profileService.updateProfileInfo(profileInfo, userId);
    res.status(HttpStatus.OK).send({user});
  }
}
