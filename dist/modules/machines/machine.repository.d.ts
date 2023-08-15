import { DataSource, Repository } from 'typeorm';
import { MachineEntity } from './entities/machine.entity';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';
export declare class MachineRepository extends Repository<MachineEntity> {
    constructor(dataSource: DataSource);
    getById(id: number): Promise<MachineEntity>;
    getByMachineGroup(machineGroup: number): Promise<MachineEntity>;
    findAll(): Promise<MachineEntity[]>;
    createMachine(newMachine: CreateMachineDto): Promise<MachineEntity>;
    updateMachine(machineData: UpdateMachineDto): Promise<object>;
}
