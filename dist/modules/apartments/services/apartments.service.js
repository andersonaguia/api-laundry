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
exports.ApartmentsService = void 0;
const common_1 = require("@nestjs/common");
const apartment_repository_1 = require("../apartment.repository");
let ApartmentsService = class ApartmentsService {
    constructor(apartmentRepository) {
        this.apartmentRepository = apartmentRepository;
    }
    async create(newApartment) {
        const { apartment } = newApartment;
        const apartmentExists = await this.apartmentRepository.getByApartment(apartment);
        if (apartmentExists) {
            throw new common_1.ConflictException({
                code: 409,
                message: 'Apartment already exists',
            });
        }
        try {
            const apartmentSaved = await this.apartmentRepository.createApartment(newApartment);
            return apartmentSaved;
        }
        catch (error) {
            throw new common_1.BadRequestException({
                code: error.code,
                message: 'Apartment was not saved',
            });
        }
    }
    findAll() {
        return new Promise(async (resolve, reject) => {
            try {
                const apartments = await this.apartmentRepository.find();
                resolve(apartments);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    findOne(id) {
        return `This action returns a #${id} apartment`;
    }
    update(id, updateApartmentDto) {
        return `This action updates a #${id} apartment`;
    }
    remove(id) {
        return `This action removes a #${id} apartment`;
    }
};
ApartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [apartment_repository_1.ApartmentRepository])
], ApartmentsService);
exports.ApartmentsService = ApartmentsService;
//# sourceMappingURL=apartments.service.js.map