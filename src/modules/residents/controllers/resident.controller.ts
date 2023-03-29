import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { ChangeResidentCashDto } from '../dto/change-resident-cash.dto';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentCashService } from '../services/resident-cash.service';
import { ResidentService } from '../services/resident.service';

@Controller('residents')
export class ResidentController {
  constructor(
    private readonly residentService: ResidentService,
    private readonly residentCashService: ResidentCashService,
  ) {}

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

  @UseGuards(JwtAuthGuard)
  @Post('/changecash')
  async changeCash(@Body() data: ChangeResidentCashDto, @Request() req: any) {
    return await this.residentCashService.changeCash(data, req);
  }
}
