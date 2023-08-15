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
exports.ConfigurationEntity = void 0;
const typeorm_1 = require("typeorm");
const entities_1 = require("../../../core/entities");
const user_entity_1 = require("../../users/entities/user.entity");
let ConfigurationEntity = class ConfigurationEntity extends entities_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], ConfigurationEntity.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Date)
], ConfigurationEntity.prototype, "closingTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'minUsageTime' }),
    __metadata("design:type", Number)
], ConfigurationEntity.prototype, "minimumUsageTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'maxUsageTime' }),
    __metadata("design:type", Number)
], ConfigurationEntity.prototype, "maximumUsageTimeInHours", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', precision: 10, scale: 2, nullable: false }),
    __metadata("design:type", Number)
], ConfigurationEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.id),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ConfigurationEntity.prototype, "user", void 0);
ConfigurationEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'system_config' })
], ConfigurationEntity);
exports.ConfigurationEntity = ConfigurationEntity;
//# sourceMappingURL=configuration.entity.js.map