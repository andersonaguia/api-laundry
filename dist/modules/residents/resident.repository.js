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
exports.ResidentRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const resident_entity_1 = require("./entities/resident.entity");
let ResidentRepository = class ResidentRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(resident_entity_1.ResidentEntity, dataSource.createEntityManager());
    }
    async getById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const resident = await this.findOne({ where: { id }, loadRelationIds: true });
                resolve(resident);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async getAll() {
        return await this.find({
            where: { deletedAt: null },
            relations: { apartment: true },
        });
    }
    async getByApartmentId(apartmentId) {
        return new Promise(async (resolve, reject) => {
            try {
                const resident = await this.findOne({
                    where: {
                        apartment: (0, typeorm_1.Equal)(apartmentId),
                    },
                });
                console.log("RESIDENT: ", resident);
                resolve(resident);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async createResident(newResident) {
        return new Promise(async (resolve, reject) => {
            try {
                const residentSaved = await this.save(newResident);
                resolve(residentSaved);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async removeResident(residentId) {
        return new Promise((resolve, reject) => {
            try {
                const resident = new resident_entity_1.ResidentEntity();
                resident.deletedAt = new Date();
                resident.apartment = null;
                const residentDeleted = this.update({ id: residentId }, resident);
                console.log(residentDeleted);
                if (residentDeleted) {
                    console.log(residentDeleted);
                    resolve({ code: 200, message: "Removido com sucesso" });
                }
            }
            catch (error) {
                reject({ code: error.code });
            }
        });
    }
    async updateResident(id, resident) {
        return new Promise(async (resolve, reject) => {
            try {
                const { affected } = await this.update({ id }, resident);
                if (affected > 0) {
                    resolve("Dados atualizados com sucesso");
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
};
ResidentRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ResidentRepository);
exports.ResidentRepository = ResidentRepository;
//# sourceMappingURL=resident.repository.js.map