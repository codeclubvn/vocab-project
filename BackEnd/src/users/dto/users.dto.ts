// Read docs: https://docs.nestjs.com/techniques/validation
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
import { UserFireBase } from '../user.swagger';

// Khai báo cho swagger biết để test api cho dễ view trên host http://localhost:3000/api/users

export class UserFireBaseDto extends PartialType(UserFireBase) {
  @IsString()
  email: string;

  @IsNotEmpty()
  avt: string;

  @IsNotEmpty()
  full_name: string;

  @IsNotEmpty()
  uid: string;
}
