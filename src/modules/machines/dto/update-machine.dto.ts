import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMachineDto {
  @IsNotEmpty()
  @IsNumber()
  machineId: number;

  @IsNotEmpty()
  @IsBoolean()
  isOn: boolean;
}
