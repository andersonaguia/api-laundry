"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apartmentEntityUnique1677758371513 = void 0;
class apartmentEntityUnique1677758371513 {
    constructor() {
        this.name = 'apartmentEntityUnique1677758371513';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL`);
        await queryRunner.query(`ALTER TABLE \`apartments\` ADD UNIQUE INDEX \`IDX_bcf84262895418bdd2496e2ccf\` (\`apartment\`)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`apartments\` DROP INDEX \`IDX_bcf84262895418bdd2496e2ccf\``);
        await queryRunner.query(`ALTER TABLE \`apartments\` CHANGE \`deletedAt\` \`deletedAt\` datetime(6) NULL DEFAULT 'NULL'`);
    }
}
exports.apartmentEntityUnique1677758371513 = apartmentEntityUnique1677758371513;
//# sourceMappingURL=1677758371513-apartmentEntityUnique.js.map