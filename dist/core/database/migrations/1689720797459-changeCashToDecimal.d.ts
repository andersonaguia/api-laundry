import { MigrationInterface, QueryRunner } from "typeorm";
export declare class changeCashToDecimal1689720797459 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
