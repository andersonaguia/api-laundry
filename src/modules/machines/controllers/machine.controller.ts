import { Controller, Post, Body } from '@nestjs/common';
import { CreateMachineDto } from '../dto/create-machine.dto';
import { MachineService } from '../services/machine.service';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machineService: MachineService) {}

  @Post('/create')
  create(@Body() machineData: CreateMachineDto) {
    return this.machineService.create(machineData);
  }
}
