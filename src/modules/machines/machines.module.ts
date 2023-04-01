import { Module } from '@nestjs/common';
import { ApartmentRepository } from '../apartments/apartment.repository';
import { MachinesController } from './controllers/machine.controller';
import { MachineHistoryRepository } from './machine-history.repository';
import { MachineRepository } from './machine.repository';
import { MachineService } from './services/machine.service';

@Module({
  imports: [],
  controllers: [MachinesController],
  providers: [
    MachineService,
    MachineRepository,
    ApartmentRepository,
    MachineHistoryRepository,
  ],
})
export class MachinesModule {}
