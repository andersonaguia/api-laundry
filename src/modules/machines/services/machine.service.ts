import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateMachineDto } from '../dto/create-machine.dto';
import { MachineRepository } from '../machine.repository';

@Injectable()
export class MachineService {
  constructor(private readonly machineRepository: MachineRepository) {}

  async create(newMachine: CreateMachineDto) {
    const { machineGroup } = newMachine;
    const machineExists = await this.machineRepository.getByMachineGroup(
      machineGroup,
    );
    if (machineExists) {
      throw new ConflictException({
        code: 409,
        message: 'Machine group already exists',
      });
    }

    try {
      const machineSaved = await this.machineRepository.createMachine(
        newMachine,
      );

      return machineSaved;
    } catch (error) {
      throw new BadRequestException({
        code: error.code,
        message: 'Apartment was not saved',
      });
    }
  }
}
