import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    ci: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    roleId: number;
    @ApiPropertyOptional()
    role: string;
}
