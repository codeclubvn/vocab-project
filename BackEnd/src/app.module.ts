import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { databaseProviders } from './database/database.provider';
import { ConfigModule } from '@nestjs/config';
import { RolesGuard } from './commons/guard/roles/roles.guard';
import { CollectionsModule } from './collections/collections.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({ envFilePath: '.env' }),
    JwtModule.register({
      global: true,
      secret: process.env.ACCESS_TOKEN || 'team vocab build',
      signOptions: { expiresIn: '7d' },
    }),
    CollectionsModule,
  ],
  controllers: [],
  providers: [...databaseProviders],
})

export class AppModule {}
