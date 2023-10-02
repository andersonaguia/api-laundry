import { CreateMachineDto } from "../dto/create-machine.dto";
import { UpdateMachineDto } from "../dto/update-machine.dto";
import { UseMachineDto } from "../dto/use-machine.dto";
import { MachineHistoryEntity } from "../entities/machine-history.entity";
import { MachineEntity } from "../entities/machine.entity";
import { MachineRepository } from "../machine.repository";
import { ApartmentRepository } from "src/modules/apartments/apartment.repository";
import { MachineHistoryRepository } from "../machine-history.repository";
import { ResidentRepository } from "src/modules/residents/resident.repository";
import { ResidentCashRepository } from "src/modules/residents/resident-cash.repository";
import { ConfigurationRepository } from "../../configuration/configuration.repository";
import { UserRepository } from 'src/modules/users/user.repository';
export declare class MachineService {
    private readonly machineRepository;
    private readonly apartmentRepository;
    private readonly machineHistoryRepository;
    private readonly residentRepository;
    private readonly residentCashRepository;
    private readonly configurationRepository;
    private readonly userRepository;
    constructor(machineRepository: MachineRepository, apartmentRepository: ApartmentRepository, machineHistoryRepository: MachineHistoryRepository, residentRepository: ResidentRepository, residentCashRepository: ResidentCashRepository, configurationRepository: ConfigurationRepository, userRepository: UserRepository);
    findAll(): Promise<MachineEntity[]>;
    create(newMachine: CreateMachineDto): Promise<MachineEntity>;
    updateStatus(machineData: UpdateMachineDto): Promise<object>;
    useMachine(newUse: UseMachineDto, req: any): Promise<MachineHistoryEntity>;
}
