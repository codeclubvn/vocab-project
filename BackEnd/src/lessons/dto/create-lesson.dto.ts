import { IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateVocabDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  front_text: string;

  @ApiProperty()
  back_text: string;

  @ApiProperty({ required: false })
  image?: string;

  @ApiProperty({ required: false })
  sound?: string;

  @ApiProperty({ required: false })
  example?: string;
}

export class CreateLessonDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ type: [CreateVocabDto] })
  vocabularies: CreateVocabDto[];
}
