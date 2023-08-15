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
exports.ResidentCashService = void 0;
const common_1 = require("@nestjs/common");
const apartment_repository_1 = require("../../apartments/apartment.repository");
const resident_cash_entity_1 = require("../entities/resident-cash.entity");
const resident_cash_repository_1 = require("../resident-cash.repository");
const resident_repository_1 = require("../resident.repository");
let ResidentCashService = class ResidentCashService {
    constructor(residentRepository, apartmentRepository, residentCashRepository) {
        this.residentRepository = residentRepository;
        this.apartmentRepository = apartmentRepository;
        this.residentCashRepository = residentCashRepository;
    }
    async getAtualCashByApartment(apartmentId) {
        return new Promise(async (resolve, reject) => {
            try {
                const atualCash = await this.residentCashRepository.getAtualCashByApartment(apartmentId);
                resolve(atualCash);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async changeCash(data, req) {
        const resident = await this.residentRepository.getById(data.residentId);
        if (!resident) {
            throw new common_1.NotFoundException({
                statusCode: 404,
                message: 'Resident was not found',
            });
        }
        const newCash = new resident_cash_entity_1.ResidentCashEntity();
        newCash.user = req.user;
        newCash.apartment = resident.apartment;
        newCash.resident = resident;
        newCash.cash = data.cash;
        const residentCashUpdated = await this.residentCashRepository.changeCash(newCash);
        return residentCashUpdated;
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
ResidentCashService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [resident_repository_1.ResidentRepository,
        apartment_repository_1.ApartmentRepository,
        resident_cash_repository_1.ResidentCashRepository])
], ResidentCashService);
exports.ResidentCashService = ResidentCashService;
//# sourceMappingURL=resident-cash.service.js.map