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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const nest_response_builder_1 = require("../../http/nest-response-builder");
const auth_service_1 = require("../services/auth.service");
const change_password_dto_1 = require("../dto/change-password.dto");
const credentials_dto_1 = require("../dto/credentials.dto");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const create_user_dto_1 = require("../../../modules/users/dto/create-user.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(createUserDto) {
        console.log(createUserDto);
        try {
            const result = await this.authService.signUp(createUserDto);
            if (result === null) {
                return new nest_response_builder_1.NestResponseBuilder()
                    .withStatus(common_1.HttpStatus.UNPROCESSABLE_ENTITY)
                    .withBody({
                    statusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
                    message: 'Passwords do not match',
                })
                    .build();
            }
            else if (result.id) {
                return new nest_response_builder_1.NestResponseBuilder()
                    .withStatus(common_1.HttpStatus.CREATED)
                    .withBody({
                    statusCode: common_1.HttpStatus.CREATED,
                    message: 'Successful registration',
                })
                    .build();
            }
        }
        catch (error) {
            if (error.code === '23505') {
                return new nest_response_builder_1.NestResponseBuilder()
                    .withStatus(common_1.HttpStatus.CONFLICT)
                    .withBody({
                    code: error.code,
                    detail: error.detail,
                })
                    .build();
            }
            return new nest_response_builder_1.NestResponseBuilder()
                .withStatus(common_1.HttpStatus.BAD_REQUEST)
                .withBody({
                code: error.code,
                detail: error.detail,
            })
                .build();
        }
    }
    async signIn(credentialsDto) {
        const result = await this.authService.signIn(credentialsDto);
        if (result === null) {
            return new nest_response_builder_1.NestResponseBuilder()
                .withStatus(common_1.HttpStatus.UNAUTHORIZED)
                .withBody({
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: 'Incorrect email or password',
            })
                .build();
        }
        else if (result.token) {
            return new nest_response_builder_1.NestResponseBuilder()
                .withStatus(common_1.HttpStatus.OK)
                .withBody(result)
                .build();
        }
        return new nest_response_builder_1.NestResponseBuilder()
            .withStatus(common_1.HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }
    async changePassword(data) {
        const result = await this.authService.changePassword(data);
        if (result === null) {
            return new nest_response_builder_1.NestResponseBuilder()
                .withStatus(common_1.HttpStatus.UNAUTHORIZED)
                .withBody({
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: 'Incorrect email or oldPassword',
            })
                .build();
        }
        else if ((0, class_validator_1.isNumber)(result)) {
            if (result > 0) {
                return new nest_response_builder_1.NestResponseBuilder()
                    .withStatus(common_1.HttpStatus.OK)
                    .withBody('Password changed successfully')
                    .build();
            }
            else {
                return new nest_response_builder_1.NestResponseBuilder()
                    .withStatus(common_1.HttpStatus.NOT_FOUND)
                    .withBody({
                    code: 20000,
                    detail: 'This id not found or unable to update',
                })
                    .build();
            }
        }
        return new nest_response_builder_1.NestResponseBuilder()
            .withStatus(common_1.HttpStatus.BAD_REQUEST)
            .withBody(result)
            .build();
    }
};
__decorate([
    (0, common_1.Post)('/auth/signup'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/auth/signin'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentials_dto_1.CredentialsDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/auth/changepassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_dto_1.ChangePasswordDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map