import { Module } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { DatabaseModule } from 'src/database/database.provider';
import { lessonsProvider } from './entities/lesson.schema';

@Module({
  imports: [DatabaseModule],
  controllers: [LessonsController],
  providers: [
    LessonsService,
    ...lessonsProvider,
  ],
  exports: [
    ...lessonsProvider,
  ]
})
export class LessonsModule {}
