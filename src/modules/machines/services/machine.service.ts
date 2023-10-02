import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
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
import { MoreThan } from "typeorm";
import { ResidentCashEntity } from "src/modules/residents/entities/resident-cash.entity";
import { UserRepository } from 'src/modules/users/user.repository';

@Injectable()
export class MachineService {
  constructor(
    private readonly machineRepository: MachineRepository,
    private readonly apartmentRepository: ApartmentRepository,
    private readonly machineHistoryRepository: MachineHistoryRepository,
    private readonly residentRepository: ResidentRepository,
    private readonly residentCashRepository: ResidentCashRepository,
    private readonly configurationRepository: ConfigurationRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async findAll(): Promise<MachineEntity[]> {
    return await this.machineRepository.findAll();
  }

  async create(newMachine: CreateMachineDto) {
    const { machineGroup } = newMachine;
    const machineExists = await this.machineRepository.getByMachineGroup(
      machineGroup
    );
    if (machineExists) {
      throw new ConflictException({
        code: 409,
        message: "Machine group already exists",
      });
    }

    try {
      const machineSaved = await this.machineRepository.createMachine(
        newMachine
      );

      return machineSaved;
    } catch (error) {
      throw new BadRequestException({
        code: error.code,
        message: "Apartment was not saved",
      });
    }
  }

  async updateStatus(machineData: UpdateMachineDto) {
    return await this.machineRepository.updateMachine(machineData);
  }

  async useMachine(
    newUse: UseMachineDto,
    req: any
  ): Promise<MachineHistoryEntity> {
    const { isOn, machineId, apartmentId } = newUse;
    const userId = req.user.id;

    const machine = await this.machineRepository.getById(machineId);

    if (!machine) {
      throw new NotFoundException({
        code: 404,
        message: "Machine was not found",
      });
    }

    const apartment = await this.apartmentRepository.getById(+apartmentId);

    if (!apartment) {
      throw new NotFoundException({
        code: 404,
        message: "Apartment was not found",
      });
    }

    const residentCash =
      await this.residentCashRepository.getAtualCashByApartment(+apartment.id);

    const currentConfig = await this.configurationRepository.findOne({
      where: {
        id: MoreThan(0),
      },
      order: { createdAt: "DESC" },
    });

    if (!residentCash || +residentCash.cash < +currentConfig.price) {
      throw new NotFoundException({
        code: 403,
        message: "No enough cash.",
      });
    }

    const resident = await this.residentRepository.getByApartmentId(
      +apartmentId
    );

    const systemUser = await this.userRepository.findUserByName('Application');

    const newCash = new ResidentCashEntity();
    newCash.user = systemUser;
    newCash.apartment = apartment;
    newCash.cash = +residentCash.cash - +currentConfig.price;
    newCash.resident = resident;

    const updatedCash = await this.residentCashRepository.changeCash(newCash);

    const useMachine = new MachineHistoryEntity();
    useMachine.apartment = apartment;
    useMachine.machine = machine;
    useMachine.isOn = isOn;
    useMachine.user = userId;

    const machineSaved = await this.machineHistoryRepository.useMachine(
      useMachine
    );

    return machineSaved;
  }
}
