import { IsEmail } from "class-validator";

export class UserRegisterDto {
    nick_name: string;
    @IsEmail()
    email: string;  
    password: string;
}