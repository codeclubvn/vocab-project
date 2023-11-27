import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class UserLoginDto {
    @ApiProperty({
        description: 'User email',
        format: 'email',
        example: 'user@example.com', // Thêm ví dụ nếu bạn muốn
      })
    @IsEmail()
    email: string;  
    password: string;
}