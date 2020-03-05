import { Controller, UseGuards, Post, Body, Request, Delete, Param, Get, Req, Res, HttpStatus } from '@nestjs/common';
import { AilmentService } from 'src/services/ailment.service';
import { AuthGuard } from '@nestjs/passport';
import { AilmentDTO } from 'src/dto/ailment.dto';
import { ApiBody, ApiTags, ApiHeader, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('ailments')
@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
})
@Controller('ailment')
@UseGuards(AuthGuard('jwt'))
export class AilmentController {
  constructor(private readonly ailmentService: AilmentService) {}

  @Post()
  @ApiBody({ type: AilmentDTO })
  async addAilmentsToUser(@Request() req, @Body() ailments: AilmentDTO, @Res() res) {
    const { userId } = req.user;
    try {
      const result = await this.ailmentService.saveAilments(userId, ailments);
      console.log("RESULT: ", result);
      if (result) {
        const list = await this.ailmentService.findAllByUserID(userId);
        console.log("LIST: ", list);
        res.status(HttpStatus.OK).send({ ailments: list });
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({ ailment: ailments, error: true, message: '' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ailment: ailments, error, message: ''});
    }
  }

  @Delete(':id')
  async deleteAilmentFromUser(@Param('id') id: number) {
    console.log(id);
    return await this.ailmentService.removeAilment(id);
  }

  @Get()
  async getAilments(@Req() req, @Res() res) {
    console.log("USERID: ", req.user);
    const { userId } = req.user;
    const ailments = await this.ailmentService.findAllByUserID(userId);
    console.log("USERID: ", userId);
    console.log("AILMENTS: ", ailments);
    res.status(HttpStatus.OK).send({ ailments });
  }
}
