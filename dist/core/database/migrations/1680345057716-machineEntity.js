"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.machineEntity1680345057716 = void 0;
class machineEntity1680345057716 {
    constructor() {
        this.name = 'machineEntity1680345057716';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`machine_history\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`isOn\` tinyint NOT NULL, \`machine_id\` int NULL, \`apartment_id\` int NULL, \`user_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`role\` \`role\` enum ('admin', 'supervisor', 'manager', 'user') NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_945671eca64e892c599a2b2584b\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_205e9c1351d3d5b37ad12987d9f\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_66e776fba6771259dc383636e12\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`resident_id\` \`resident_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`role\` \`role\` enum ('admin', 'supervisor', 'manager', 'user') NOT NULL DEFAULT 'user'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`resident_id\` \`resident_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`user_id\` \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD CONSTRAINT \`FK_62a20b78f7e8c558ec0e99f3ca0\` FOREIGN KEY (\`machine_id\`) REFERENCES \`command_machines\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD CONSTRAINT \`FK_729bbd45c93991e35f7abec8242\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD CONSTRAINT \`FK_e1c7641bfd87f4e967258237ac2\` FOREIGN KEY (\`user_id\`) REFERENCES \`system_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_945671eca64e892c599a2b2584b\` FOREIGN KEY (\`resident_id\`) REFERENCES \`residents\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_205e9c1351d3d5b37ad12987d9f\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_66e776fba6771259dc383636e12\` FOREIGN KEY (\`user_id\`) REFERENCES \`system_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_66e776fba6771259dc383636e12\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_205e9c1351d3d5b37ad12987d9f\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP FOREIGN KEY \`FK_945671eca64e892c599a2b2584b\``);
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP FOREIGN KEY \`FK_e1c7641bfd87f4e967258237ac2\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP FOREIGN KEY \`FK_729bbd45c93991e35f7abec8242\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP FOREIGN KEY \`FK_62a20b78f7e8c558ec0e99f3ca0\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`user_id\` \`user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`resident_id\` \`resident_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`role\` \`role\` enum ('admin', 'user') NOT NULL DEFAULT ''user''`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`user_id\` \`user_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`resident_id\` \`resident_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_66e776fba6771259dc383636e12\` FOREIGN KEY (\`user_id\`) REFERENCES \`system_users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_205e9c1351d3d5b37ad12987d9f\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD CONSTRAINT \`FK_945671eca64e892c599a2b2584b\` FOREIGN KEY (\`resident_id\`) REFERENCES \`residents\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`role\` \`role\` enum ('admin', 'user') NOT NULL DEFAULT ''user''`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`DROP TABLE \`machine_history\``);
    }
}
exports.machineEntity1680345057716 = machineEntity1680345057716;
//# sourceMappingURL=1680345057716-machineEntity.js.map