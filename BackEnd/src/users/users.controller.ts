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
  Req,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserLoginGoogleDto } from './dto/user-login-google.dto';
import { UserLoginFacebookDto } from './dto/user-login-facebook';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthGuard } from 'src/commons/guard/auth/auth.guard';
import { Roles } from 'src/commons/guard/roles/roles.decorator';
import { ROLE_PERMISSION } from './entities/users.schema';
import { ResponseCustomData } from '../commons/response';
import { Request, Response } from 'express';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getProfile() {
    return await this.usersService.getProfile();
  }

  @Post('register')
  async register(@Body() account: UserRegisterDto) {
    console.log('create account', account);
    return await this.usersService.register(account);
  }

  @Post('login')
  async loginUser(@Body() loginDto: UserLoginDto) {
    const token = await this.usersService.validateUserAndGenerateToken(loginDto);
    const createToken = { token: token };
    return new ResponseCustomData(createToken, 'Đăng nhập thành công', HttpStatus.OK);
  }

  // @Post('test')
  // async test(@Req() req: Request, @Res() res: Response): Promise<string> {
  //   console.log("begin----");
  //   try {
  //     console.log('Request Body:', req.body);
  //     console.log('Request Headers:', req.headers);
  //     return "done"
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return `this is a header data ${req}`;
  // }

  // @Post()
  // async login(@Body() account: UserLoginDto ) {
  //   // Create or login account with firebase
  //   console.log('create account', account);
  //   return await this.usersService.UserWithGoogle(account);
  // }

  @Post('googleauth')
  async loginWithGoogle(@Body() account: UserLoginGoogleDto) {
    // Create or login account with firebase
    console.log('create account', account);
    return await this.usersService.loginWithGoogle(account);
  }

  // @Post('auth/facebookauth')
  // async loginwithFacebook(@Body() account: UserLoginFacebookDto) {
  //   // Create or login account with firebase
  //   console.log('create account', account);
  //   return await this.usersService.UserWithGoogle(account);
  // }


  // @Get(':id')
  // getInfoUser(@Param('id') id: string) {
  //   return this.usersService.getUser(id);
  // }

  // // tạo user
  // @Post()
  // createUser(@Body() userCreate: CreateUserDto) {
  //   console.log('create -- user');
  //   return this.usersService.createUser(userCreate);
  // }

  // /// admin mới được xóa chẳng hạn
  // @Delete(':id')
  // @Roles(ROLE_PERMISSION.ADMIN, ROLE_PERMISSION.USER)
  // deleteUser(@Param('id') id: string) {
  //   console.log(id);
  //   return this.usersService.deleteUser(id);
  // }

  // @Put(':id')
  // updateUser(
  //   @Param('id', ParseIntPipe) id: string,
  //   @Body() userUpdate: UpdateUserDto,
  // ) {
  //   console.log(id, userUpdate);
  //   // this.usersService.createUser();
  // }

  // // Sử dụng query để lấy thông tin từ url /users/page?limit=10&skip=20
  // @Post('page')
  // getFollowPageUser(
  //   @Query('limit', ParseIntPipe) limit: number,
  //   @Query('skip', ParseIntPipe) skip: number,
  // ) {
  //   console.log(limit, skip);
  // }



}
