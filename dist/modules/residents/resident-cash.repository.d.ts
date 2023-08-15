import { DataSource, Repository } from 'typeorm';
import { ResidentCashEntity } from './entities/resident-cash.entity';
export declare class ResidentCashRepository extends Repository<ResidentCashEntity> {
    constructor(dataSource: DataSource);
    changeCash(newCash: ResidentCashEntity): Promise<ResidentCashEntity>;
    getAtualCashByApartment(apartment: number): Promise<ResidentCashEntity[]>;
}
