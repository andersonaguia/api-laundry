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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const machine_entity_1 = require("./entities/machine.entity");
let MachineRepository = class MachineRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(machine_entity_1.MachineEntity, dataSource.createEntityManager());
    }
    async getById(id) {
        return await this.findOne({ where: { id } });
    }
    async getByMachineGroup(machineGroup) {
        return await this.findOne({ where: { machineGroup } });
    }
    async findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.find({ where: { deletedAt: null } }));
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async createMachine(newMachine) {
        return new Promise(async (resolve, reject) => {
            try {
                const machine = new machine_entity_1.MachineEntity();
                const dataMachine = Object.assign(Object.assign({}, machine), newMachine);
                const machineSaved = await this.save(dataMachine);
                resolve(machineSaved);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async updateMachine(machineData) {
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
                throw new common_1.BadRequestException('Failed to update data');
            }
            catch (error) {
                reject(error);
            }
        });
    }
};
MachineRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], MachineRepository);
exports.MachineRepository = MachineRepository;
//# sourceMappingURL=machine.repository.js.map