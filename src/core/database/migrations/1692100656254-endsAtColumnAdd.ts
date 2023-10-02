import { MigrationInterface, QueryRunner } from "typeorm";

export class endsAtColumnAdd1692100656254 implements MigrationInterface {
    name = 'endsAtColumnAdd1692100656254'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD \`endsAt\` time NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP COLUMN \`endsAt\``);
    }

}
