import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { MachineEntity } from './entities/machine.entity';
import { CreateMachineDto } from './dto/create-machine.dto';

@Injectable()
export class MachineRepository extends Repository<MachineEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(MachineEntity, dataSource.createEntityManager());
  }

  async getByMachineGroup(machineGroup: number): Promise<MachineEntity> {
    return await this.findOne({ where: { machineGroup } });
  }

  async createMachine(newMachine: CreateMachineDto): Promise<MachineEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const machine = new MachineEntity();
        const dataMachine = {
          ...machine,
          ...newMachine,
        };
        const machineSaved = await this.save(dataMachine);
        resolve(machineSaved);
      } catch (error) {
        reject(error);
      }
    });
  }
}
