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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const credentials_dto_1 = require("../dto/credentials.dto");
const updateUserPassword_dto_1 = require("../dto/updateUserPassword.dto");
const token_dto_1 = require("../dto/token.dto");
const user_repository_1 = require("../../../modules/users/user.repository");
let AuthService = class AuthService {
    constructor(jwtService, userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }
    async signUp(userData) {
        return new Promise(async (resolve, reject) => {
            try {
                if (userData.password != userData.passwordConfirmation) {
                    resolve(null);
                }
                const userCreated = await this.userRepository.createUser(userData);
                delete userCreated.password;
                delete userCreated.salt;
                resolve(userCreated);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async signIn(credentials) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.checkCredentials(credentials);
                if (user === null) {
                    resolve(null);
                }
                const firstName = user.fullName.split(' ');
                const jwtPayload = {
                    id: user.id,
                    firstName: firstName[0],
                    occupation: user.occupation,
                    email: user.email,
                    role: user.role,
                };
                const token = new token_dto_1.TokenDTO();
                token.token = this.jwtService.sign(jwtPayload);
                resolve(token);
            }
            catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail,
                });
            }
        });
    }
    async checkCredentials(credentials) {
        const { password } = credentials;
        const user = await this.userRepository.checkCredentials(credentials);
        if (user && (await user.checkPassword(password))) {
            return user;
        }
        return null;
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
    validateToken(jwtToken) {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(await this.jwtService.verifyAsync(jwtToken, {
                    ignoreExpiration: false,
                }));
            }
            catch (error) {
                reject({
                    code: 401,
                    detail: 'JWT expired.',
                });
            }
        });
    }
    decodedToken(jwtToken) {
        return this.jwtService.decode(jwtToken);
    }
    async changePassword(data) {
        const { email, oldPassword, newPassword } = data;
        return new Promise(async (resolve, reject) => {
            try {
                const credentials = new credentials_dto_1.CredentialsDTO();
                credentials.email = email;
                credentials.password = oldPassword;
                const user = await this.checkCredentials(credentials);
                if (user === null) {
                    resolve(null);
                }
                const dataToUpdate = new updateUserPassword_dto_1.UpdateUserPasswordDTO();
                dataToUpdate.password = await this.hashPassword(newPassword, user.salt);
                dataToUpdate.updatedAt = new Date();
                user.salt = await bcrypt.genSalt(12);
                const success = await this.updateUserPassword(user.id, dataToUpdate);
                resolve(success);
            }
            catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail,
                });
            }
        });
    }
    updateUserPassword(id, dataToUpdate) {
        return new Promise(async (resolve, reject) => {
            try {
                const { affected } = await this.userRepository.update({ id: id }, dataToUpdate);
                if (affected === 0) {
                    resolve(affected);
                }
                resolve(affected);
            }
            catch (error) {
                reject({
                    code: error.code,
                    detail: error.detail,
                });
            }
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        user_repository_1.UserRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map