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
exports.ConfigurationController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../../../core/auth/guards/decorators/roles.decorator");
const jwt_auth_guard_1 = require("../../../core/auth/guards/jwt-auth.guard");
const user_role_1 = require("../../users/enum/user.role");
const create_configuration_dto_1 = require("../dto/create-configuration.dto");
const configuration_service_1 = require("../services/configuration.service");
let ConfigurationController = class ConfigurationController {
    constructor(configurationService) {
        this.configurationService = configurationService;
    }
    async findActualConfiguration() {
        return await this.configurationService.findActualConfiguration();
    }
    async findConfigurationHistory() {
        return await this.configurationService.findConfigurationHistory();
    }
    async create(configData, req) {
        return await this.configurationService.create(configData, req);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Get)('/actual'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "findActualConfiguration", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.SUPERVISOR),
    (0, common_1.Get)('/history'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "findConfigurationHistory", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.ADMIN),
    (0, roles_decorator_1.Roles)(user_role_1.UserRole.MANAGER),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_configuration_dto_1.CreateConfigDto, Object]),
    __metadata("design:returntype", Promise)
], ConfigurationController.prototype, "create", null);
ConfigurationController = __decorate([
    (0, common_1.Controller)('configuration'),
    __metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
], ConfigurationController);
exports.ConfigurationController = ConfigurationController;
//# sourceMappingURL=configuration.controller.js.map