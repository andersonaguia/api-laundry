import { MigrationInterface, QueryRunner } from "typeorm";

export class userLength1679742995876 implements MigrationInterface {
    name = 'userLength1679742995876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` DROP COLUMN \`fullName\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` ADD \`fullName\` varchar(100) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_73dff187ed765e8403bf5fc911\` ON \`system_users\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` ADD \`email\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` ADD UNIQUE INDEX \`IDX_73dff187ed765e8403bf5fc911\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`occupation\` \`occupation\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`system_users\` DROP INDEX \`IDX_73dff187ed765e8403bf5fc911\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` DROP COLUMN \`email\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` ADD \`email\` varchar(30) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_73dff187ed765e8403bf5fc911\` ON \`system_users\` (\`email\`)`);
        await queryRunner.query(`ALTER TABLE \`system_users\` DROP COLUMN \`fullName\``);
        await queryRunner.query(`ALTER TABLE \`system_users\` ADD \`fullName\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`system_users\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
    }

}
