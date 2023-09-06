import { Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUsers, UserProvide } from './schema/users.schema';
import { CreateUserDto } from './dto/users.dto';
import Generate, { AuthService } from 'src/utils/generate.until';
import { JwtService } from '@nestjs/jwt';
import { ResponseCustomData, ResponseCustomError } from 'src/commons/response';
@Injectable()
export class UsersService {
  constructor(
    @Inject(UserProvide)
    private UsersModel: Model<IUsers>,
    private jwtService: JwtService,
  ) {}

  async createUser(userCreate: CreateUserDto) {
    try {
      // Create a new user

      const AuthServiceUser = new AuthService(this.jwtService);
      const [password_hash, access_token] = await Promise.all([
        Generate.hashPassword(userCreate.password),
        AuthServiceUser.createToken({
          username: userCreate.email,
        }),
      ]);

      const dataCreateUser = {
        email: userCreate.email,
        password: password_hash,
        access_token,
      };

      const data = await this.UsersModel.create(dataCreateUser);

      if (!data) {
        throw new Error('Tạo thất bại');
      } else {
        delete data.password;
        delete data.password;
      }
      return new ResponseCustomData(
        data,
        'Tạo tài khoản thành công!',
        HttpStatus.CREATED,
      );
    } catch (err) {
      return ResponseCustomError(err);
    }
  }
  async getUser(userId: string) {
    try {
      // field 0 là bỏ qua giá trị đó
      // field 1 là bỏ qua giá trị đó mặc định là field 1
      const data = await this.UsersModel.findById(userId, {
        password: 0,
        role: 0,
      });
      return new ResponseCustomData(
        data,
        'Lấy thành công with userID: ' + userId,
      );
    } catch (err) {
      return ResponseCustomError(err);
    }
  }
  async deleteUser(id: string) {
    return await this.UsersModel.findByIdAndDelete(id);
  }
}
