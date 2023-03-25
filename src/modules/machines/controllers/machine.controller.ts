import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateMachineDto } from '../dto/create-machine.dto';
import { MachineEntity } from '../entities/machine.entity';
import { MachineService } from '../services/machine.service';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machineService: MachineService) {}

  @Get('/all')
  async findAll(): Promise<MachineEntity[]> {
    return await this.machineService.findAll();
  }

  @Post('/create')
  async create(@Body() machineData: CreateMachineDto): Promise<MachineEntity> {
    return await this.machineService.create(machineData);
  }
}
