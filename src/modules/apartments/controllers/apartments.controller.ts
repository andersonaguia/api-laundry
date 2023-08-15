import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreateApartmentDto } from "../dto/create-apartment.dto";
import { UpdateApartmentDto } from "../dto/update-apartment.dto";
import { ApartmentsService } from "../services/apartments.service";
import { ApartmentEntity } from "../entities/apartment.entity";

@Controller("apartments")
export class ApartmentsController {
  constructor(private readonly apartmentsService: ApartmentsService) {}

  @Post("/create")
  create(@Body() apartmentData: CreateApartmentDto) {
    return this.apartmentsService.create(apartmentData);
  }

  @Get()
  async findAll(): Promise<ApartmentEntity[]> {
    try {
      return await this.apartmentsService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.apartmentsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateApartmentDto: UpdateApartmentDto
  ) {
    return this.apartmentsService.update(+id, updateApartmentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.apartmentsService.remove(+id);
  }
}
