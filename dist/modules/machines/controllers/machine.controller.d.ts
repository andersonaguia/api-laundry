import { CreateMachineDto } from '../dto/create-machine.dto';
import { UpdateMachineDto } from '../dto/update-machine.dto';
import { UseMachineDto } from '../dto/use-machine.dto';
import { MachineEntity } from '../entities/machine.entity';
import { MachineService } from '../services/machine.service';
import { MachineHistoryEntity } from '../entities/machine-history.entity';
export declare class MachinesController {
    private readonly machineService;
    constructor(machineService: MachineService);
    findAll(): Promise<MachineEntity[]>;
    create(machineData: CreateMachineDto): Promise<MachineEntity>;
    updateStatus(machineData: UpdateMachineDto): Promise<object>;
    useMachine(useData: UseMachineDto, req: any): Promise<MachineHistoryEntity>;
}
