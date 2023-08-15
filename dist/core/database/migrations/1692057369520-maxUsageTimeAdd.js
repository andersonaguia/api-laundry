"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxUsageTimeAdd1692057369520 = void 0;
class maxUsageTimeAdd1692057369520 {
    constructor() {
        this.name = 'maxUsageTimeAdd1692057369520';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`system_config\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`startTime\` datetime NOT NULL, \`closingTime\` datetime NOT NULL, \`minUsageTime\` int NOT NULL, \`maxUsageTime\` int NOT NULL, \`price\` float(10,2) NOT NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`system_config\` ADD CONSTRAINT \`FK_b4c58f55c02d74c9c7234c0f788\` FOREIGN KEY (\`user_id\`) REFERENCES \`system_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`system_config\` DROP FOREIGN KEY \`FK_b4c58f55c02d74c9c7234c0f788\``);
        await queryRunner.query(`DROP TABLE \`system_config\``);
    }
}
exports.maxUsageTimeAdd1692057369520 = maxUsageTimeAdd1692057369520;
//# sourceMappingURL=1692057369520-maxUsageTimeAdd.js.map