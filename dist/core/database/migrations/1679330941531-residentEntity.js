"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.residentEntity1679330941531 = void 0;
class residentEntity1679330941531 {
    constructor() {
        this.name = 'residentEntity1679330941531';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`residents\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`name\` varchar(100) NOT NULL, \`email\` varchar(100) NOT NULL, \`phone\` varchar(12) NOT NULL, \`apartment_id\` int NULL, UNIQUE INDEX \`REL_cd6313a860ece9aafa0636a66a\` (\`apartment_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP INDEX \`REL_cd6313a860ece9aafa0636a66a\` ON \`residents\``);
        await queryRunner.query(`DROP TABLE \`residents\``);
    }
}
exports.residentEntity1679330941531 = residentEntity1679330941531;
//# sourceMappingURL=1679330941531-residentEntity.js.map