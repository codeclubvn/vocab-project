import { createCipheriv, randomBytes, scrypt } from 'crypto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
//Read docs: ->⚡https://docs.nestjs.com/security/encryption-and-hashing#hashing

// Tạo và kiểm tra password người dùng
class Generate {
  static saltOrRounds = 10;
  static hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, this.saltOrRounds);
  }
  static verifyPassword(password: string, hash: string): Promise<Boolean> {
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

export default Generate;
