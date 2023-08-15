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
exports.ResidentCashEntity = void 0;
const entities_1 = require("../../../core/entities");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const resident_entity_1 = require("./resident.entity");
let ResidentCashEntity = class ResidentCashEntity extends entities_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "decimal", precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], ResidentCashEntity.prototype, "cash", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resident_entity_1.ResidentEntity, (resident) => resident.id),
    (0, typeorm_1.JoinColumn)({
        name: 'resident_id',
    }),
    __metadata("design:type", resident_entity_1.ResidentEntity)
], ResidentCashEntity.prototype, "resident", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.ApartmentEntity, (apartment) => apartment.id),
    (0, typeorm_1.JoinColumn)({
        name: 'apartment_id',
    }),
    __metadata("design:type", entities_1.ApartmentEntity)
], ResidentCashEntity.prototype, "apartment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.id),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], ResidentCashEntity.prototype, "user", void 0);
ResidentCashEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'resident_cash' })
], ResidentCashEntity);
exports.ResidentCashEntity = ResidentCashEntity;
//# sourceMappingURL=resident-cash.entity.js.map