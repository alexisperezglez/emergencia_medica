import { Controller, UseGuards, Post, Request, Body, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DiseaseService } from 'src/services/disease.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
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
  async addDiseaseToUser(@Request() req, @Body() diseases: DiseaseDTO[]) {
    console.log(diseases);
    const { userId, ...others } = req.user;
    const result = await this.diseaseService.saveDiseases(userId, diseases);
    return result;
  }

  @Delete(':id')
  async deleteAilmentFromUser(@Param('id') id: number) {
    return await this.diseaseService.removeDisease(id);
  }
}
