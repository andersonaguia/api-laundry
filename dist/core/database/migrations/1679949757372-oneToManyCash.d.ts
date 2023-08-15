import { MigrationInterface, QueryRunner } from "typeorm";
export declare class oneToManyCash1679949757372 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
