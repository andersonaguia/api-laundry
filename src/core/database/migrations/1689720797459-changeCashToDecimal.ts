import { MigrationInterface, QueryRunner } from "typeorm";

export class changeCashToDecimal1689720797459 implements MigrationInterface {
    name = 'changeCashToDecimal1689720797459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`cash\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`cash\` decimal(5,2) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`cash\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`cash\` int NOT NULL`);
    }

}
