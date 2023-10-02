import {
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
import { ResidentCashEntity } from "src/modules/residents/entities/resident-cash.entity";
import { UserRepository } from "src/modules/users/user.repository";
import { ResponseDto } from "src/common/responseDto";

@Injectable()
export class MachineService {
  constructor(
    private readonly machineRepository: MachineRepository,
    private readonly apartmentRepository: ApartmentRepository,
    private readonly machineHistoryRepository: MachineHistoryRepository,
    private readonly residentRepository: ResidentRepository,
    private readonly residentCashRepository: ResidentCashRepository,
    private readonly configurationRepository: ConfigurationRepository,
    private readonly userRepository: UserRepository
  ) {}

  async findAll(): Promise<MachineEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const allMachines = await this.machineRepository.findAll();
        resolve(allMachines);
      } catch (error) {
        reject(error);
      }
    });
  }

  async create(newMachine: CreateMachineDto): Promise<ResponseDto> {
    return new Promise(async (resolve, reject) => {
      try {
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

        const machineSaved = await this.machineRepository.createMachine(
          newMachine
        );

        resolve({
          code: 201,
          message: "Group of machines created successfully!",
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  async updateStatus(machineData: UpdateMachineDto): Promise<ResponseDto> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.machineRepository.updateCommandMachine(machineData);
        resolve({ code: 200, message: "Machine command updated sucessfully" });
      } catch (error) {
        reject(error);
      }
    });
  }

  async useMachine(newUse: UseMachineDto, req: any): Promise<ResponseDto> {
    return new Promise(async (resolve, reject) => {
      try {
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
          await this.residentCashRepository.getAtualCashByApartment(
            +apartment.id
          );

        const currentConfig =
          await this.configurationRepository.findActualConfiguration();

        if (!residentCash || +residentCash.cash < +currentConfig.price) {
          throw new NotFoundException({
            code: 403,
            message: "No enough cash.",
          });
        }

        const resident = await this.residentRepository.getByApartmentId(
          +apartmentId
        );

        const systemUser = await this.userRepository.findUserByName(
          "Application"
        );

        const newCash = new ResidentCashEntity();
        newCash.user = systemUser;
        newCash.apartment = apartment;
        newCash.cash = +residentCash.cash - +currentConfig.price;
        newCash.resident = resident;

        await this.residentCashRepository.changeCash(newCash);

        const useMachine = new MachineHistoryEntity();
        useMachine.apartment = apartment;
        useMachine.machine = machine;
        useMachine.isOn = isOn;
        useMachine.user = userId;

        await this.machineHistoryRepository.useMachine(useMachine);

        const machineData = new UpdateMachineDto();
        machineData.isOn = useMachine.isOn;
        machineData.machineId = +machine.id;

        await this.updateStatus(machineData);

        resolve({ code: 201, message: "Machines available for use." });
      } catch (error) {
        reject(error);
      }
    });
  }
}
