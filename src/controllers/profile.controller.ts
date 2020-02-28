import { Controller, UseGuards, Get, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from 'src/services/profile.service';
import { ProfileDTO } from 'src/dto/profile.dto';

@Controller('profile')
@UseGuards(AuthGuard('jwt'))
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Get()
    async profileList(): Promise<string> {
        return 'lista de perfiles';
    }

    @Post()
    async saveProfile(@Body() profile: ProfileDTO): Promise<string> {
        return 'agregar perfil';
    }
}
