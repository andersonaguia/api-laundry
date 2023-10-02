"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endsAtColumnDelete1695904075800 = void 0;
class endsAtColumnDelete1695904075800 {
    constructor() {
        this.name = 'endsAtColumnDelete1695904075800';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP COLUMN \`endsAt\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD \`endsAt\` time NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`machine_history\` DROP COLUMN \`endsAt\``);
        await queryRunner.query(`ALTER TABLE \`machine_history\` ADD \`endsAt\` time NULL`);
    }
}
exports.endsAtColumnDelete1695904075800 = endsAtColumnDelete1695904075800;
//# sourceMappingURL=1695904075800-endsAt_column_delete.js.map