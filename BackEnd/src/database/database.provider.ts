import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { MONGODB_CONFIG } from './database.config';

export const databaseProviders = [
  {
    provide: MONGODB_CONFIG.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        MONGODB_CONFIG.DATABASE_CONNECTION || MONGODB_CONFIG.COMPASS,
        {
          dbName: 'vocabs',
        },
      ),
  },
];

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
