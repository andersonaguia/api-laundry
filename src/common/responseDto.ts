import { IsNumber, IsString } from "class-validator";

export class ResponseDto {
  @IsNumber()
  code: number;

  @IsString()
  message: string;
}
