import { PartialType } from '@nestjs/swagger';
import { CreateLessonDto } from './create-lesson.dto';

export class UpdateLessonDto extends PartialType(CreateLessonDto) {}


// class CreateDTOSwagger {
  
//     @ApiProperty()
//     receivers: string;
  
//     @ApiProperty()
//     user_id: string;
  
//     @ApiProperty()
//     name: string;
  
//     @ApiProperty()
//     total: number;
//   }
  
//   export class CollectionCreateDto extends PartialType(CreateDTOSwagger) {
  
//     @IsNotEmpty()
//     receivers: string;
  
//     @IsNotEmpty()
//     user_id: string;
  
//     @IsNotEmpty()
//     name: string;
  
//     total: number;
//   }
  