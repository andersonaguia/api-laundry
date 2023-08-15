"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const typeorm_1 = require("@nestjs/typeorm");
const env_1 = require("../../common/env");
const path_1 = require("path");
const data_source_1 = require("../../core/database/data-source");
const apartments_module_1 = require("../apartments/apartments.module");
const residents_module_1 = require("../residents/residents.module");
const auth_module_1 = require("../../core/auth/auth.module");
const machines_module_1 = require("../machines/machines.module");
const configuration_module_1 = require("../configuration/configuration.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [env_1.default],
                isGlobal: true,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', '..', 'public'),
            }),
            typeorm_1.TypeOrmModule.forRoot(Object.assign({ autoLoadEntities: true }, data_source_1.dataSourceOptions)),
            apartments_module_1.ApartmentsModule,
            residents_module_1.ResidentsModule,
            auth_module_1.AuthModule,
            machines_module_1.MachinesModule,
            configuration_module_1.ConfigurationModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map