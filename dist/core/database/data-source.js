"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
require("dotenv/config");
const typeorm_1 = require("typeorm");
exports.dataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    entities: [
        __dirname + '/../../**/**/*.entity{.ts,.js}',
        'dist/**/**/*.entity.js',
    ],
    migrations: [
        __dirname + './migrations/*{.ts,.js}',
        'dist/core/database/migrations/*{.ts,.js}',
    ],
    migrationsRun: false,
    synchronize: false,
    migrationsTableName: 'migrations_history',
    logging: true,
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map