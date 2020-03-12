import { ApiProperty, ApiPropertyOptional, getSchemaPath } from '@nestjs/swagger';
import { DiseaseDTO } from './disease.dto';

export class ProfileInfoDTO {
  @ApiProperty()
  address: string;
  
  @ApiPropertyOptional({type: 'array', items: {$ref: getSchemaPath(DiseaseDTO)}})
  familyRecords: DiseaseDTO[] = [];
}
