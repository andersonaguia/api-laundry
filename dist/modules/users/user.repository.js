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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(user_entity_1.UserEntity, dataSource.createEntityManager());
    }
    async checkCredentials(credentials) {
        const { email } = credentials;
        return await this.findOne({
            where: { email: email },
        });
    }
    async findUserByName(username) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.findOne({
                    where: {
                        fullName: (0, typeorm_1.Like)(`%${username}%`),
                    },
                });
                resolve(user);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async createUser(newUser) {
        return new Promise(async (resolve, reject) => {
            try {
                const { fullName, email, password, occupation, role } = newUser;
                const user = new user_entity_1.UserEntity();
                user.fullName = fullName;
                user.email = email;
                user.occupation = occupation;
                user.role = role;
                user.salt = await bcrypt.genSalt(12);
                user.password = await this.hashPassword(password, user.salt);
                const apartmentSaved = await this.save(user);
                resolve(apartmentSaved);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async hashPassword(password, salt) {
        return bcrypt.hash(password, salt);
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map