import { Module } from '@nestjs/common';
import { ApartmentRepository } from '../apartments/apartment.repository';
import { MachinesController } from './controllers/machine.controller';
import { MachineHistoryRepository } from './machine-history.repository';
import { MachineRepository } from './machine.repository';
import { MachineService } from './services/machine.service';
import { ResidentRepository } from '../residents/resident.repository';
import { ResidentCashRepository } from '../residents/resident-cash.repository';
import { ConfigurationRepository } from '../configuration/configuration.repository';
import { UserRepository } from '../users/user.repository';

@Module({
  imports: [],
  controllers: [MachinesController],
  providers: [
    MachineService,
    MachineRepository,
    ApartmentRepository,
    MachineHistoryRepository,
    ResidentRepository,
    ResidentCashRepository,
    ConfigurationRepository,
    UserRepository,
  ],
})
export class MachinesModule {}
