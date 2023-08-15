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
exports.ApartmentsController = void 0;
const common_1 = require("@nestjs/common");
const create_apartment_dto_1 = require("../dto/create-apartment.dto");
const update_apartment_dto_1 = require("../dto/update-apartment.dto");
const apartments_service_1 = require("../services/apartments.service");
let ApartmentsController = class ApartmentsController {
    constructor(apartmentsService) {
        this.apartmentsService = apartmentsService;
    }
    create(apartmentData) {
        return this.apartmentsService.create(apartmentData);
    }
    async findAll() {
        try {
            return await this.apartmentsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    findOne(id) {
        return this.apartmentsService.findOne(+id);
    }
    update(id, updateApartmentDto) {
        return this.apartmentsService.update(+id, updateApartmentDto);
    }
    remove(id) {
        return this.apartmentsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apartment_dto_1.CreateApartmentDto]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ApartmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_apartment_dto_1.UpdateApartmentDto]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApartmentsController.prototype, "remove", null);
ApartmentsController = __decorate([
    (0, common_1.Controller)("apartments"),
    __metadata("design:paramtypes", [apartments_service_1.ApartmentsService])
], ApartmentsController);
exports.ApartmentsController = ApartmentsController;
//# sourceMappingURL=apartments.controller.js.map