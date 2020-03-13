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
      if (result) {
        const list = await this.ailmentService.findAllByUserID(userId);
        res.status(HttpStatus.OK).send({ ailments: list });
      } else {
        res.status(HttpStatus.BAD_REQUEST).send({ ailment: ailments, error: true, message: '' });
      }
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).send({ailment: ailments, error, message: ''});
    }
  }

  @Delete(':id')
  async deleteAilmentFromUser(@Req() req, @Param('id') id, @Res() res) {
    const {userId} = req.user;
    await this.ailmentService.removeAilment(id);
    const ailments = await this.ailmentService.findAllByUserID(userId);
    res.status(HttpStatus.OK).send({ailments});
  }

  @Get()
  async getAilments(@Req() req, @Res() res) {
    const { userId } = req.user;
    const ailments = await this.ailmentService.findAllByUserID(userId);
    res.status(HttpStatus.OK).send({ ailments });
  }

}
