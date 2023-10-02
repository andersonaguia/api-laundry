import { MigrationInterface, QueryRunner } from "typeorm";

export class endsAtColumnDelete1695904075800 implements MigrationInterface {
    name = 'endsAtColumnDelete1695904075800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP COLUMN \`endsAt\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD \`endsAt\` time NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP COLUMN \`endsAt\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD \`endsAt\` time NULL`);
    }

}
