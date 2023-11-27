import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProvider } from './entities/users.schema';
import { DatabaseModule } from 'src/database/database.provider';
import { RolesGuard } from 'src/commons/guard/roles/roles.guard';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...usersProvider,
    { useClass: RolesGuard, provide: 'APP_GUARD' },
  ], 
  exports: [
    UsersService,
    ...usersProvider
  ],
})
export class UsersModule {}
