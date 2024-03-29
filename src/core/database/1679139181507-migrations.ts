import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1679139181507 implements MigrationInterface {
  name = 'migrations1679139181507';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`residents\` DROP FOREIGN KEY \`FK_cd6313a860ece9aafa0636a66a1\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` CHANGE \`apartment_id\` \`apartment_id\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`residents\` ADD CONSTRAINT \`FK_cd6313a860ece9aafa0636a66a1\` FOREIGN KEY (\`apartment_id\`) REFERENCES \`apartments\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`,
    );
  }
}
