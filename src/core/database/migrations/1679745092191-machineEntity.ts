import { MigrationInterface, QueryRunner } from "typeorm";

export class machineEntity1679745092191 implements MigrationInterface {
    name = 'machineEntity1679745092191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`command_machines\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`group1\` tinyint NOT NULL, \`group2\` tinyint NOT NULL, \`group3\` tinyint NOT NULL, \`group4\` tinyint NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`ALTER TABLE \`command_machines\` ADD \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`createdAt\` \`createdAt\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`updatedAt\` \`updatedAt\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`updatedAt\` \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` CHANGE \`createdAt\` \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`command_machines\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`ALTER TABLE \`command_machines\` ADD \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`DROP TABLE \`command_machines\``);
    }

}
