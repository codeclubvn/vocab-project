import { ApiProperty, PartialType } from '@nestjs/swagger';
export class UserFireBase {
  @ApiProperty()
  email: string;

  @ApiProperty()
  avt: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  uid: string;
}
