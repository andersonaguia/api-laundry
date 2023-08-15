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
exports.ResidentController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../../../core/auth/guards/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../../core/auth/guards/jwt-auth.guard");
const user_role_1 = require("../../users/enum/user.role");
const change_resident_cash_dto_1 = require("../dto/change-resident-cash.dto");
const create_resident_dto_1 = require("../dto/create-resident.dto");
const resident_cash_service_1 = require("../services/resident-cash.service");
const resident_service_1 = require("../services/resident.service");
let ResidentController = class ResidentController {
    constructor(residentService, residentCashService) {
        this.residentService = residentService;
        this.residentCashService = residentCashService;
    }
    async findAll() {
        return await this.residentService.findAll();
    }
    async create(residentData) {
        return await this.residentService.create(residentData);
    }
    async remove(id) {
        return await this.residentService.remove(+id);
    }
    async changeCash(data, req) {
        return await this.residentCashService.changeCash(data, req);
    }
    async getAtualCashByApartment(id) {
        return await this.residentCashService.getAtualCashByApartment(+id);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ResidentController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resident_dto_1.CreateResidentDto]),
    __metadata("design:returntype", Promise)
], ResidentController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)('/remove/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResidentController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Post)('/changecash'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_resident_cash_dto_1.ChangeResidentCashDto, Object]),
    __metadata("design:returntype", Promise)
], ResidentController.prototype, "changeCash", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Get)('/atualcash/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ResidentController.prototype, "getAtualCashByApartment", null);
ResidentController = __decorate([
    (0, common_1.Controller)('residents'),
    __metadata("design:paramtypes", [resident_service_1.ResidentService,
        resident_cash_service_1.ResidentCashService])
], ResidentController);
exports.ResidentController = ResidentController;
//# sourceMappingURL=resident.controller.js.map