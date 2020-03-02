import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post('registry')
    async registry(@Body() userDTO: UserDTO, @Res() res) {
        try {
            console.log('USER_DTO: ', userDTO);
            const validUser = await this.userService.validateUser(userDTO);
            console.log('VALID_USER', validUser);
            if (validUser === null) {
                const user = await this.userService.saveUser(userDTO);
                console.log('USER: ', user);
                res.status(HttpStatus.OK).send({ user });
            } else {
                console.log('YA_EXISTE');
                res.status(HttpStatus.UNPROCESSABLE_ENTITY).send({ user: userDTO, message: 'ya existe un usuario con el mismo ' + validUser.error });
            }
        } catch(error) {
            console.error('REQUEST_ERROR:', error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({user: userDTO, message: 'No se pudo ejecutar la accion.'});
        }
    }
}
