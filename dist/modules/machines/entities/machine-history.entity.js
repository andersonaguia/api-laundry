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
exports.MachineHistoryEntity = void 0;
const entities_1 = require("../../../core/entities");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
const machine_entity_1 = require("./machine.entity");
let MachineHistoryEntity = class MachineHistoryEntity extends entities_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], MachineHistoryEntity.prototype, "isOn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => machine_entity_1.MachineEntity, (apartment) => apartment.id),
    (0, typeorm_1.JoinColumn)({
        name: 'machine_id',
    }),
    __metadata("design:type", machine_entity_1.MachineEntity)
], MachineHistoryEntity.prototype, "machine", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.ApartmentEntity, (apartment) => apartment.id),
    (0, typeorm_1.JoinColumn)({
        name: 'apartment_id',
    }),
    __metadata("design:type", entities_1.ApartmentEntity)
], MachineHistoryEntity.prototype, "apartment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.id),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
    }),
    __metadata("design:type", user_entity_1.UserEntity)
], MachineHistoryEntity.prototype, "user", void 0);
MachineHistoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'machine_history' })
], MachineHistoryEntity);
exports.MachineHistoryEntity = MachineHistoryEntity;
//# sourceMappingURL=machine-history.entity.js.map