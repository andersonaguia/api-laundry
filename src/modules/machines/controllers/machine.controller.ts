import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  UseGuards,
  Request,
} from '@nestjs/common';
import { Roles } from 'src/core/auth/guards/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { CreateMachineDto } from '../dto/create-machine.dto';
import { UpdateMachineDto } from '../dto/update-machine.dto';
import { UseMachineDto } from '../dto/use-machine.dto';
import { MachineEntity } from '../entities/machine.entity';
import { MachineService } from '../services/machine.service';
import { UserRole } from 'src/modules/users/enum/user.role';
import { MachineHistoryEntity } from '../entities/machine-history.entity';

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

  @Patch('/updatestatus')
  async updateStatus(@Body() machineData: UpdateMachineDto): Promise<object> {
    return await this.machineService.updateStatus(machineData);
  }

  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @Roles(UserRole.MANAGER)
  @Roles(UserRole.SUPERVISOR)
  @Post('/usemachine')
  async useMachine(
    @Body() useData: UseMachineDto,
    @Request() req: any,
  ): Promise<MachineHistoryEntity> {
    return await this.machineService.useMachine(useData, req);
  }
}
