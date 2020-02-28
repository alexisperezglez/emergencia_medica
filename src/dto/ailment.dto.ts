import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AilmentDTO {
  @ApiProperty()
  ailment: string;
  @ApiPropertyOptional()
  observations: string;
}
