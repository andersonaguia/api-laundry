import { DataSource, Repository } from 'typeorm';
import { ResidentEntity } from './entities/resident.entity';
export declare class ResidentRepository extends Repository<ResidentEntity> {
    constructor(dataSource: DataSource);
    getById(id: number): Promise<ResidentEntity>;
    getAll(): Promise<ResidentEntity[]>;
    createResident(newResident: ResidentEntity): Promise<ResidentEntity>;
    removeResident(residentId: number): Promise<object>;
    updateResident(id: number, resident: ResidentEntity): Promise<string>;
}
