import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMachineDto {
  @IsNotEmpty()
  @IsNumber()
  readonly machineGroup: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsBoolean()
  readonly isOn: boolean;
}
