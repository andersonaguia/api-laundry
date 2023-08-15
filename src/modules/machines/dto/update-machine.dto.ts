import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMachineDto {
  @IsNotEmpty()
  @IsNumber()
  readonly apartmentId: number;

  @IsNotEmpty()
  @IsNumber()
  readonly machineId: number;

  @IsNotEmpty()
  @IsBoolean()
  readonly isOn: boolean;
}
