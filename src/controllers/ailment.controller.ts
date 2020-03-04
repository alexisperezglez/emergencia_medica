import { Controller, UseGuards, Post, Body, Request, Delete, Param } from '@nestjs/common';
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
  @ApiBody({ type: [AilmentDTO] })
  async addAilmentsToUser(@Request() req, @Body() ailments: AilmentDTO[]) {
    const { userId, ...others } = req.user;
    const result = await this.ailmentService.saveAilments(userId, ailments);
    return result;
  }

  @Delete(':id')
  async deleteAilmentFromUser(@Param('id') id: number) {
    console.log(id);
    return await this.ailmentService.removeAilment(id);
  }
}
