import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChangeResidentCashDto {
  @IsNotEmpty()
  @IsNumber()
  cash: number;

  @IsNotEmpty()
  @IsNumber()
  residentId: number;

  @IsNotEmpty()
  @IsNumber()
  apartmentId: number;
}
