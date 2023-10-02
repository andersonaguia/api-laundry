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
exports.ResidentCashRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const resident_cash_entity_1 = require("./entities/resident-cash.entity");
let ResidentCashRepository = class ResidentCashRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(resident_cash_entity_1.ResidentCashEntity, dataSource.createEntityManager());
    }
    async changeCash(newCash) {
        return new Promise(async (resolve, reject) => {
            try {
                const residentCashSaved = await this.save(newCash);
                resolve(residentCashSaved);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async getAtualCashByApartment(apartment) {
        return new Promise(async (resolve, reject) => {
            try {
                const cash = await this.findOne({
                    where: {
                        apartment: (0, typeorm_1.Equal)(apartment),
                    },
                    order: {
                        createdAt: "DESC",
                    },
                });
                resolve(cash);
            }
            catch (error) {
                reject(error);
            }
        });
    }
};
ResidentCashRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], ResidentCashRepository);
exports.ResidentCashRepository = ResidentCashRepository;
//# sourceMappingURL=resident-cash.repository.js.map