"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeCashToDecimal1689720797459 = void 0;
class changeCashToDecimal1689720797459 {
    constructor() {
        this.name = 'changeCashToDecimal1689720797459';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`cash\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`cash\` decimal(5,2) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`resident_cash\` DROP COLUMN \`cash\``);
        await queryRunner.query(`ALTER TABLE \`resident_cash\` ADD \`cash\` int NOT NULL`);
    }
}
exports.changeCashToDecimal1689720797459 = changeCashToDecimal1689720797459;
//# sourceMappingURL=1689720797459-changeCashToDecimal.js.map