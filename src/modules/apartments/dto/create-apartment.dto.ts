import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateApartmentDto {
    @IsNotEmpty()
    @IsNumber()
    apartment: number;
}
