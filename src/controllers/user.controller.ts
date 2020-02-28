import { Controller, Post, Body } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('registry')
    async registry(@Body() userDTO: UserDTO) {
        console.log('USER: ', userDTO);
        const user = await this.userService.saveUser(userDTO);
        return {user};
    }
}
