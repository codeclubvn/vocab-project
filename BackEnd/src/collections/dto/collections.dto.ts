import { IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

// Khai báo cho swagger biết để test api cho dễ
class CreateDTOSwagger {
  
  @ApiProperty()
  receivers: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  total: number;
}

export class CollectionCreateDto extends PartialType(CreateDTOSwagger) {

  @IsNotEmpty()
  receivers: string;

  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  name: string;

  total: number;
}
