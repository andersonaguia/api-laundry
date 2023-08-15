"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneToManyCash1679949757372 = void 0;
class oneToManyCash1679949757372 {
    constructor() {
        this.name = 'oneToManyCash1679949757372';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_205e9c1351d3d5b37ad12987d9f\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_66e776fba6771259dc383636e12\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_945671eca64e892c599a2b2584b\``);
        await queryRunner.query(`DROP INDEX \`REL_945671eca64e892c599a2b2584\` ON \`resident_cash\``);
        await queryRunner.query(`DROP INDEX \`REL_205e9c1351d3d5b37ad12987d9\` ON \`resident_cash\``);
        await queryRunner.query(`DROP INDEX \`IDX_66e776fba6771259dc383636e1\` ON \`resident_cash\``);
        await queryRunner.query(`DROP INDEX \`REL_66e776fba6771259dc383636e1\` ON \`resident_cash\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`resident_id\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`apartment_id\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`user_id\``);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`resident_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_66e776fba6771259dc383636e1\` ON \`resident_cash\` (\`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_66e776fba6771259dc383636e1\` ON \`resident_cash\` (\`user_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_205e9c1351d3d5b37ad12987d9\` ON \`resident_cash\` (\`apartment_id\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_945671eca64e892c599a2b2584\` ON \`resident_cash\` (\`resident_id\`)`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_945671eca64e892c599a2b2584b\` FOREIGN KEY (\`resident_id\`) REFERENCES \`residents\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_66e776fba6771259dc383636e12\` FOREIGN KEY (\`user_id\`) REFERENCES \`system_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_205e9c1351d3d5b37ad12987d9f\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.oneToManyCash1679949757372 = oneToManyCash1679949757372;
//# sourceMappingURL=1679949757372-oneToManyCash.js.map