"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachinesModule = void 0;
const common_1 = require("@nestjs/common");
const apartment_repository_1 = require("../apartments/apartment.repository");
const machine_controller_1 = require("./controllers/machine.controller");
const machine_history_repository_1 = require("./machine-history.repository");
const machine_repository_1 = require("./machine.repository");
const machine_service_1 = require("./services/machine.service");
const resident_repository_1 = require("../residents/resident.repository");
const resident_cash_repository_1 = require("../residents/resident-cash.repository");
let MachinesModule = class MachinesModule {
};
MachinesModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [machine_controller_1.MachinesController],
        providers: [
            machine_service_1.MachineService,
            machine_repository_1.MachineRepository,
            apartment_repository_1.ApartmentRepository,
            machine_history_repository_1.MachineHistoryRepository,
            resident_repository_1.ResidentRepository,
            resident_cash_repository_1.ResidentCashRepository,
        ],
    })
], MachinesModule);
exports.MachinesModule = MachinesModule;
//# sourceMappingURL=machines.module.js.map