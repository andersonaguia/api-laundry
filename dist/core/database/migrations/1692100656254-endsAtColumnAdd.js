"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsAtColumnAdd1692100656254 = void 0;
class endsAtColumnAdd1692100656254 {
    constructor() {
        this.name = 'endsAtColumnAdd1692100656254';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD \`endsAt\` time NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP COLUMN \`endsAt\``);
    }
}
exports.endsAtColumnAdd1692100656254 = endsAtColumnAdd1692100656254;
//# sourceMappingURL=1692100656254-endsAtColumnAdd.js.map