// Read docs: https://docs.nestjs.com/techniques/validation
import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

// Khai báo cho swagger biết để test api cho dễ view trên host http://localhost:3000/api/users

class createUserDtoSwagger {

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  nick_name: string;
}

class UpdateUserDtoSwagger {

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  nick_name: string;
}
class LoginUserDtoSwagger {

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  nick_name: string;
}
export class CreateUserDto extends PartialType(createUserDtoSwagger) {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  nick_name: string;
}

export class UpdateUserDto extends PartialType(UpdateUserDtoSwagger) {

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  nick_name: string;
}
export class LoginUserDto extends PartialType(LoginUserDtoSwagger){

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;

  @IsNotEmpty()
  readonly nick_name: string;
}