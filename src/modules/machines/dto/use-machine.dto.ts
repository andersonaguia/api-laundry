import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class UseMachineDto {
  @IsBoolean()
  readonly isOn: boolean;

  @IsNotEmpty()
  @IsNumber()
  readonly machineId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly residentId: number;
}
