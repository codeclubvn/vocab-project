import {
  Inject,
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { IUsers, UserProvide } from './schema/users.schema';
import { UserFireBaseDto } from './dto/users.dto';
import PassWordGenerator, { AuthService } from 'src/commons/auth/authen.until';
import { JwtService } from '@nestjs/jwt';
import { ResponseCustomData, ResponseCustomError } from 'src/commons/response';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserProvide)
    private UsersModel: Model<IUsers>,
    private jwtService: JwtService,
  ) {}

  async UserWithFirebase(user: UserFireBaseDto) {
    try {
      // tài khoản đăng hoặc là đăng ký bằng firebase
      const { uid } = user;
      let account = await this.UsersModel.findOne({ uid }).select({
        password: 0,
        uid: 0,
      });
      let message = 'Đăng nhập bằng firebase thành công';
      let statusCode = 200;

      if (!account) {
        message = 'Tạo tài khoản thành công!';
        account = await this.UsersModel.create(user);
        delete account.password;
        delete account.uid;
        statusCode = 201;
      }

      return new ResponseCustomData(account, message, statusCode);
      // tạo tài khoản dựa vào uid
    } catch (error) {
      throw new ResponseCustomError(error, 400);
    }
  }
  // async createUser(userCreate: CreateUserDto) {
  //   try {
  //     // Create a new user
  //     const AuthServiceUser = new AuthService(this.jwtService);
  //       const [password_hash, access_token, existingUser ] = await Promise.all([
  //       PassWordGenerator.hash(userCreate.password),
  //       AuthServiceUser.createToken({
  //         username: userCreate.email,
  //       }),
  //       this.UsersModel.findOne({ email: userCreate.email }),
  //     ]);

  //     if (existingUser) {
  //       throw new Error('Email đã tồn tại!');
  //     }

  //     const dataCreateUser = {
  //       email: userCreate.email,
  //       password: password_hash,
  //       access_token,
  //       nick_name: userCreate.nick_name
  //     };

  //     const data = await this.UsersModel.create(dataCreateUser);

  //     if (!data) {
  //       throw new Error('Tạo thất bại');
  //     } else {
  //       delete data.password;
  //     }
  //     return new ResponseCustomData(
  //       data,
  //       'Tạo tài khoản thành c.' +
  //         'ông!',
  //       HttpStatus.CREATED,
  //     );
  //   } catch (err) {
  //     return ResponseCustomError(err);
  //   }
  // }

  // async getUser(userId: string) {
  //   try {
  //     // field 0 là bỏ qua giá trị đó
  //     // field 1 là bỏ qua giá trị đó mặc định là field 1
  //     const data = await this.UsersModel.findById(userId, {
  //       password: 0,
  //       role: 0,
  //     });
  //     return new ResponseCustomData(
  //       data,
  //       'Lấy thành công with userID: ' + userId,
  //     );
  //   } catch (err) {
  //     return ResponseCustomError(err);
  //   }
  // }

  // async deleteUser(id: string) {
  //   return await this.UsersModel.findByIdAndDelete(id);
  // }
  // async validateUserAndGenerateToken (loginDto: LoginUserDto): Promise<string> {
  //   try {
  //     const user = await this.UsersModel.findOne({
  //       nick_name: loginDto.nick_name,
  //       email: loginDto.email,
  //     }).exec();
  //     if (user && await PassWordGenerator.verify(loginDto.password, user.password.toString())) {
  //       const payload = { id: user.id, email: user.email };
  //       return this.jwtService.signAsync(payload);
  //     }
  //     throw new Error('Thông tin đăng nhập không hợp lệ !');
  //   } catch (e) {
  //     throw new ResponseCustomError(e, 401);
  //   }
  // }
}
