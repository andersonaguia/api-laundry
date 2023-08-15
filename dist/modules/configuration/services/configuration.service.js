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
exports.ConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const configuration_repository_1 = require("../configuration.repository");
const configuration_entity_1 = require("../entities/configuration.entity");
let ConfigurationService = class ConfigurationService {
    constructor(configurationRepository) {
        this.configurationRepository = configurationRepository;
    }
    async create(newConfig, req) {
        return new Promise(async (resolve, reject) => {
            try {
                const { startTime, closingTime, minimumUsageTimeInHours, maximumUsageTimeInHours, price } = newConfig;
                const { id } = req.user;
                console.log(newConfig);
                const configuration = new configuration_entity_1.ConfigurationEntity();
                configuration.startTime = new Date(startTime);
                configuration.closingTime = new Date(closingTime);
                configuration.minimumUsageTime = minimumUsageTimeInHours;
                configuration.maximumUsageTimeInHours = maximumUsageTimeInHours;
                configuration.price = price;
                configuration.user = id;
                const hour = new Date('12/03/2022 17:00:23');
                console.log(hour);
                console.log(hour.getHours());
                console.log(hour.getMinutes());
                console.log(hour.getSeconds());
                const configurationSaved = await this.configurationRepository.createConfiguration(configuration);
                resolve(configurationSaved);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async findActualConfiguration() {
        return new Promise(async (resolve, reject) => {
            try {
                const actualConfiguration = await this.configurationRepository.findActualConfiguration();
                resolve(actualConfiguration);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    async findConfigurationHistory() {
        return new Promise(async (resolve, reject) => {
            try {
                const configurationHistory = await this.configurationRepository.findConfigurationHistory();
                resolve(configurationHistory);
            }
            catch (error) {
                reject(error);
            }
        });
    }
};
ConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [configuration_repository_1.ConfigurationRepository])
], ConfigurationService);
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map