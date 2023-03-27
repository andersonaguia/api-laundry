import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentService } from '../services/resident.service';

@Controller('residents')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @Get('/all')
  async findAll(): Promise<ResidentEntity[]> {
    return await this.residentService.findAll();
  }

  @Post('/create')
  async create(@Body() residentData: CreateResidentDto) {
    return await this.residentService.create(residentData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<string> {
    return await this.residentService.remove(+id);
  }
}
