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
exports.MachinesController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../../../core/auth/guards/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../../core/auth/guards/jwt-auth.guard");
const create_machine_dto_1 = require("../dto/create-machine.dto");
const update_machine_dto_1 = require("../dto/update-machine.dto");
const use_machine_dto_1 = require("../dto/use-machine.dto");
const machine_service_1 = require("../services/machine.service");
const user_role_1 = require("../../users/enum/user.role");
let MachinesController = class MachinesController {
    constructor(machineService) {
        this.machineService = machineService;
    }
    async findAll() {
        return await this.machineService.findAll();
    }
    async create(machineData) {
        return await this.machineService.create(machineData);
    }
    async updateStatus(machineData) {
        return await this.machineService.updateStatus(machineData);
    }
    async useMachine(useData, req) {
        return await this.machineService.useMachine(useData, req);
    }
};
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_machine_dto_1.CreateMachineDto]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)('/updatestatus'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_machine_dto_1.UpdateMachineDto]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Post)('/usemachine'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [use_machine_dto_1.UseMachineDto, Object]),
    __metadata("design:returntype", Promise)
], MachinesController.prototype, "useMachine", null);
MachinesController = __decorate([
    (0, common_1.Controller)('machines'),
    __metadata("design:paramtypes", [machine_service_1.MachineService])
], MachinesController);
exports.MachinesController = MachinesController;
//# sourceMappingURL=machine.controller.js.map