import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateResidentDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  phone: string;
}
