import { Module } from '@nestjs/common';
import { CollectionsController } from './collections.controller';
import { CollectionsService } from './collections.service';
import { CollectionsProvider } from './schema/collections.schema';
import { DatabaseModule } from 'src/database/database.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CollectionsController],
  providers: [CollectionsService, ...CollectionsProvider],
})
export class CollectionsModule {}
