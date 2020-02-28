import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class DiseaseDTO {
  @ApiProperty()
  disease: string;
  @ApiPropertyOptional()
  observations: string;
}
