import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { SeedService } from './seed.service';
import { usersProvider } from 'src/users/entities/users.schema';
import { DatabaseModule } from '../database.provider';
import { lessonsProvider } from 'src/lessons/entities/lesson.schema';

@Module({
  imports: [CommandModule, DatabaseModule],
  providers: [
    SeedService,
    ...usersProvider,
    ...lessonsProvider,
  ],
  exports: [SeedService],
})
export class SeedsModule {}
