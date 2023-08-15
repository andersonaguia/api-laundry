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
exports.ResidentEntity = void 0;
const entities_1 = require("../../../core/entities");
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../core/entities/base.entity");
let ResidentEntity = class ResidentEntity extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], ResidentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 100 }),
    __metadata("design:type", String)
], ResidentEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, length: 12 }),
    __metadata("design:type", String)
], ResidentEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.ApartmentEntity, (apartment) => apartment.id),
    (0, typeorm_1.JoinColumn)({
        name: 'apartment_id',
    }),
    __metadata("design:type", entities_1.ApartmentEntity)
], ResidentEntity.prototype, "apartment", void 0);
ResidentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'residents' })
], ResidentEntity);
exports.ResidentEntity = ResidentEntity;
//# sourceMappingURL=resident.entity.js.map