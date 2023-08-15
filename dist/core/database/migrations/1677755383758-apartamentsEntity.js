"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apartamentsEntity1677755383758 = void 0;
class apartamentsEntity1677755383758 {
    constructor() {
        this.name = 'apartamentsEntity1677755383758';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`apartments\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`apartment\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`apartments\``);
    }
}
exports.apartamentsEntity1677755383758 = apartamentsEntity1677755383758;
//# sourceMappingURL=1677755383758-apartamentsEntity.js.map