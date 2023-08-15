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
exports.ChangePasswordDTO = void 0;
const class_validator_1 = require("class-validator");
const match_decorator_1 = require("../../constraints/match.decorator");
class ChangePasswordDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'email cannot be empty' }),
    (0, class_validator_1.IsString)({ message: 'email must be a string' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'oldPassword must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'oldPassword cannot be empty' }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "oldPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'newPassword must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'newPassword cannot be empty' }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: 'The newPassword must contain at least 8 characters, including at least one letter, one number and one special character',
    }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "newPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'newPasswordConfirmation must be a string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'newPasswordConfirmation cannot be empty' }),
    (0, match_decorator_1.Match)('newPassword', { message: 'new passwords do not match' }),
    __metadata("design:type", String)
], ChangePasswordDTO.prototype, "newPasswordConfirmation", void 0);
exports.ChangePasswordDTO = ChangePasswordDTO;
//# sourceMappingURL=change-password.dto.js.map