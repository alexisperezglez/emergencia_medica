import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UserDTO } from 'src/dto/user.dto';
import { UserService } from 'src/services/user.service';
import { ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
})
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('registry')
  async registry(@Body() userDTO: UserDTO, @Res() res) {
    try {
      const validUser = await this.userService.validateUser(userDTO);
      if (validUser === null) {
        const user = await this.userService.saveUser(userDTO);
        res.status(HttpStatus.OK).send({ user });
      } else {
        res
          .status(HttpStatus.UNPROCESSABLE_ENTITY)
          .send({
            user: userDTO,
            message: 'ya existe un usuario con el mismo ' + validUser.error,
          });
      }
    } catch (error) {
      console.error('REQUEST_ERROR:', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ user: userDTO, message: 'No se pudo ejecutar la accion.' });
    }
  }
}
