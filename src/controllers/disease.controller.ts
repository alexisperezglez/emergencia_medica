import { Controller, UseGuards, Post, Request, Body, Delete, Param, Res, HttpStatus, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DiseaseService } from 'src/services/disease.service';
import { ApiBody, ApiTags, ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { DiseaseDTO } from 'src/dto/disease.dto';

@ApiTags('diseases')
@ApiBearerAuth()
@ApiHeader({
  name: 'Authorization',
  description: 'Bearer token',
})
@Controller('disease')
@UseGuards(AuthGuard('jwt'))
export class DiseaseController {
  constructor(private readonly diseaseService: DiseaseService) {}

  @Post()
  @ApiBody({ type: [DiseaseDTO] })
  async addDiseaseToUser(@Request() req, @Body() diseases: DiseaseDTO, @Res() res) {
    const { userId } = req.user;
    const result = await this.diseaseService.saveDiseases(userId, diseases);
    const diseasesList = await this.diseaseService.findDiseasesByUser(userId);
    res.status(HttpStatus.OK).send({diseases: diseasesList});
  }

  @Get()
  async getDiseases(@Request() req, @Res() res) {
    const { userId } = req.user;
    const diseases = await this.diseaseService.findDiseasesByUser(userId);
    res.status(HttpStatus.OK).send({diseases});
  }

  @Delete(':id')
  async deleteAilmentFromUser(@Req() req, @Param('id') id: number, @Res() res) {
    const { userId } = req.user;
    const deletedDisease = await this.diseaseService.removeDisease(id);
    const diseases = await this.diseaseService.findDiseasesByUser(userId);
    res.status(HttpStatus.OK).send({diseases});
  }
}
