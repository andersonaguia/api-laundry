"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineService = void 0;
const common_1 = require("@nestjs/common");
const machine_history_entity_1 = require("../entities/machine-history.entity");
const machine_repository_1 = require("../machine.repository");
const apartment_repository_1 = require("../../apartments/apartment.repository");
const machine_history_repository_1 = require("../machine-history.repository");
const resident_repository_1 = require("../../residents/resident.repository");
const resident_cash_repository_1 = require("../../residents/resident-cash.repository");
let MachineService = class MachineService {
    constructor(machineRepository, apartmentRepository, machineHistoryRepository, residentRepository, residentCashRepository) {
        this.machineRepository = machineRepository;
        this.apartmentRepository = apartmentRepository;
        this.machineHistoryRepository = machineHistoryRepository;
        this.residentRepository = residentRepository;
        this.residentCashRepository = residentCashRepository;
    }
    async findAll() {
        return await this.machineRepository.findAll();
    }
    async create(newMachine) {
        const { machineGroup } = newMachine;
        const machineExists = await this.machineRepository.getByMachineGroup(machineGroup);
        if (machineExists) {
            throw new common_1.ConflictException({
                code: 409,
                message: 'Machine group already exists',
            });
        }
        try {
            const machineSaved = await this.machineRepository.createMachine(newMachine);
            return machineSaved;
        }
        catch (error) {
            throw new common_1.BadRequestException({
                code: error.code,
                message: 'Apartment was not saved',
            });
        }
    }
    async updateStatus(machineData) {
        return await this.machineRepository.updateMachine(machineData);
    }
    async useMachine(newUse, req) {
        const { isOn, machineId, residentId } = newUse;
        const userId = req.user.id;
        console.log(userId);
        const machine = await this.machineRepository.getById(machineId);
        if (!machine) {
            throw new common_1.NotFoundException({
                code: 404,
                message: 'Machine was not found',
            });
        }
        const resident = await this.residentRepository.getById(residentId);
        console.log('RESIDENT: ', resident);
        if (!resident) {
            throw new common_1.NotFoundException({
                code: 404,
                message: 'Resident was not found',
            });
        }
        const apartment = resident.apartment;
        console.log('APARTMENT: ', apartment);
        const residentCash = await this.residentCashRepository.getAtualCashByApartment(5);
        console.log('SALDO ATUAL: ', residentCash);
        const useMachine = new machine_history_entity_1.MachineHistoryEntity();
        useMachine.apartment = resident.apartment;
        useMachine.machine = machine;
        useMachine.isOn = isOn;
        useMachine.user = userId;
        const machineSaved = await this.machineHistoryRepository.useMachine(useMachine);
        return machineSaved;
    }
};
MachineService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [machine_repository_1.MachineRepository,
        apartment_repository_1.ApartmentRepository,
        machine_history_repository_1.MachineHistoryRepository,
        resident_repository_1.ResidentRepository,
        resident_cash_repository_1.ResidentCashRepository])
], MachineService);
exports.MachineService = MachineService;
//# sourceMappingURL=machine.service.js.map