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
  readonly minimumUsageTimeInHours: number;

  @IsNotEmpty()
  @IsNumber()
  readonly maximumUsageTimeInHours: number;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}
