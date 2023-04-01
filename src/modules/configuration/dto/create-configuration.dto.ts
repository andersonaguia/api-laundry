import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateConfigDto {
  @IsNotEmpty()
  @IsDateString()
  readonly startTime: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly closingTime: Date;

  @IsNotEmpty()
  @IsNumber()
  readonly minimumUsageTime: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
