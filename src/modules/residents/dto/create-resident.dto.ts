import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateResidentDto {
  @IsNotEmpty()
  @IsNumber()
  apartment: number;

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
