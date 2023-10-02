import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

//Read docs: ->⚡https://docs.nestjs.com/security/encryption-and-hashing#hashing

// Tạo và kiểm tra password và hash  người dùng
class PassWordGenerator {

  static saltOrRounds = 10;

  static hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltOrRounds);
  }
  static verify(password: string, hash: string): Promise<Boolean> {
    return bcrypt.compare(password, hash);
  }
}

// tạo và check token người dùng
export class AuthService {

  constructor(private jwtService: JwtService) {
    this.jwtService = jwtService;
  }

  createToken(payload: Object): Promise<String> {
    console.log(process.env.ACCESS_TOKEN);
    return this.jwtService.signAsync(payload);
  }
  
  async checkToken(payload: Object, token: string): Promise<boolean> {
    return new Promise((resolve) => {
      const data = this.jwtService.verifyAsync(token, {
        secret: process.env.ACCESS_TOKEN || 'team vocab build',
      });
      if (data == payload) {
        return resolve(true);
      } else {
        return resolve(false);
      }
    });
  }
}

export default PassWordGenerator;
