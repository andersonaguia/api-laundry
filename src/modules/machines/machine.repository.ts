import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { MachineEntity } from './entities/machine.entity';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Injectable()
export class MachineRepository extends Repository<MachineEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(MachineEntity, dataSource.createEntityManager());
  }

  async getByMachineGroup(machineGroup: number): Promise<MachineEntity> {
    return await this.findOne({ where: { machineGroup } });
  }

  async findAll(): Promise<MachineEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        resolve(await this.find({ where: { deletedAt: null } }));
      } catch (error) {
        reject(error);
      }
    });
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

  async updateMachine(machineData: UpdateMachineDto): Promise<object> {
    const { machineId, isOn } = machineData;

    const dataToUpdate = {
      isOn: isOn,
      updatedAt: new Date(),
    };

    return new Promise(async (resolve, reject) => {
      try {
        const { affected } = await this.update({ id: machineId }, dataToUpdate);
        if (affected > 0) {
          resolve({
            statusCode: 200,
            message: 'Data updated successfully',
          });
        }
        throw new BadRequestException('Failed to update data');
      } catch (error) {
        reject(error);
      }
    });
  }
}
