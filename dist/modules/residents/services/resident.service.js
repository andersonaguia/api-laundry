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
exports.ResidentService = void 0;
const common_1 = require("@nestjs/common");
const apartment_repository_1 = require("../../apartments/apartment.repository");
const resident_entity_1 = require("../entities/resident.entity");
const resident_repository_1 = require("../resident.repository");
let ResidentService = class ResidentService {
    constructor(residentRepository, apartmentRepository) {
        this.residentRepository = residentRepository;
        this.apartmentRepository = apartmentRepository;
    }
    async findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const allResidents = await this.residentRepository.getAll();
                const residents = allResidents.map((resident) => {
                    return this.formatResidentResponse(resident);
                });
                resolve(residents);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async create(newResident) {
        const { apartment } = newResident;
        const apartmentExists = await this.apartmentRepository.getByApartment(apartment);
        if (!apartmentExists) {
            throw new common_1.NotFoundException({
                code: 404,
                message: 'Apartment was not found',
            });
        }
        const resident = new resident_entity_1.ResidentEntity();
        const dataResident = Object.assign(Object.assign(Object.assign({}, resident), newResident), { apartment: apartmentExists });
        try {
            const residentSaved = await this.residentRepository.createResident(dataResident);
            const formattedResident = this.formatResidentResponse(residentSaved);
            return formattedResident;
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.ConflictException({
                    code: error.code,
                    message: 'There is already a resident associated with this apartment',
                });
            }
            throw new common_1.BadRequestException({
                code: error.code,
                message: 'Resident was not saved',
            });
        }
    }
    async remove(id) {
        return new Promise(async (resolve, reject) => {
            const residentExists = await this.residentRepository.getById(id);
            if (!residentExists) {
                throw new common_1.NotFoundException('Resident is not found');
            }
            try {
                await this.residentRepository.removeResident(id);
                resolve('Successfully deleted resident');
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async update(id, residentData) {
        return new Promise(async (resolve, reject) => {
            try {
                const residentExists = await this.residentRepository.getById(id);
                if (!residentExists) {
                    throw new common_1.NotFoundException('Resident was not found');
                }
                const resident = new resident_entity_1.ResidentEntity();
                resident.updatedAt = new Date();
                const residentToUpdate = Object.assign(Object.assign({}, resident), residentData);
                const residentUpdated = await this.residentRepository.updateResident(id, residentToUpdate);
                resolve(residentUpdated);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    formatResidentResponse(resident) {
        delete resident.createdAt;
        delete resident.updatedAt;
        delete resident.deletedAt;
        delete resident.apartment.createdAt;
        delete resident.apartment.updatedAt;
        delete resident.apartment.deletedAt;
        return resident;
    }
};
ResidentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [resident_repository_1.ResidentRepository,
        apartment_repository_1.ApartmentRepository])
], ResidentService);
exports.ResidentService = ResidentService;
//# sourceMappingURL=resident.service.js.map