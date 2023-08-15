"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResidentsModule = void 0;
const common_1 = require("@nestjs/common");
const apartments_module_1 = require("../apartments/apartments.module");
const users_module_1 = require("../users/users.module");
const resident_controller_1 = require("./controllers/resident.controller");
const resident_cash_repository_1 = require("./resident-cash.repository");
const resident_repository_1 = require("./resident.repository");
const resident_cash_service_1 = require("./services/resident-cash.service");
const resident_service_1 = require("./services/resident.service");
let ResidentsModule = class ResidentsModule {
};
ResidentsModule = __decorate([
    (0, common_1.Module)({
        imports: [apartments_module_1.ApartmentsModule, users_module_1.UsersModule],
        controllers: [resident_controller_1.ResidentController],
        providers: [
            resident_service_1.ResidentService,
            resident_cash_service_1.ResidentCashService,
            resident_repository_1.ResidentRepository,
            resident_cash_repository_1.ResidentCashRepository,
        ],
    })
], ResidentsModule);
exports.ResidentsModule = ResidentsModule;
//# sourceMappingURL=residents.module.js.map