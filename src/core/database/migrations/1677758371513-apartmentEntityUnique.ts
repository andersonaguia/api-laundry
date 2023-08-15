import { MigrationInterface, QueryRunner } from "typeorm";

export class apartmentEntityUnique1677758371513 implements MigrationInterface {
    name = 'apartmentEntityUnique1677758371513'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` ADD UNIQUE INDEX \`IDX_bcf84262895418bdd2496e2ccf\` (\`apartment\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`apartments\` DROP INDEX \`IDX_bcf84262895418bdd2496e2ccf\``);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
    }

}
