import { Controller, Post, Body } from '@nestjs/common';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { ResidentService } from '../services/resident.service';

@Controller('residents')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @Post('/create')
  create(@Body() residentData: CreateResidentDto) {
    return this.residentService.create(residentData);
  }
}
