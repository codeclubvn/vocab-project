import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
  Query,
  ParseIntPipe,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { AuthGuard } from 'src/commons/guard/auth/auth.guard';
import { Roles } from 'src/commons/guard/roles/roles.decorator';
import { ROLE_PERMISSION } from './schema/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  createUser(@Body() userCreate: CreateUserDto) {
    console.log('create -- user');
    return this.usersService.createUser(userCreate);
  }

  @Get(':userId')
  getInfo(@Param('userId') userId: string) {
    return this.usersService.getUser(userId);
  }

  /// admin mới được xóa chẳng hạn
  @Delete(':id')
  @Roles(ROLE_PERMISSION.ADMIN, ROLE_PERMISSION.USER)
  deleteUser(@Param('id') id: string) {
    console.log(id);
    return this.usersService.deleteUser(id);
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: string,
    @Body() userUpdate: UpdateUserDto,
  ) {
    console.log(id, userUpdate);
    // this.usersService.createUser();
  }

  // Sử dụng query để lấy thông tin từ url /users?limit=10&skip=20
  @Post('getaccount')
  getAccount(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('skip', ParseIntPipe) skip: number,
  ) {
    console.log(limit, skip);
  }
}