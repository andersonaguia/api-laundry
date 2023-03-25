import { Module } from '@nestjs/common';
import { MachinesController } from './controllers/machine.controller';
import { MachineRepository } from './machine.repository';
import { MachineService } from './services/machine.service';

@Module({
  imports: [],
  controllers: [MachinesController],
  providers: [MachineService, MachineRepository],
})
export class MachinesModule {}
