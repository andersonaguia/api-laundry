import { DataSource, Repository } from 'typeorm';
import { MachineHistoryEntity } from './entities/machine-history.entity';
export declare class MachineHistoryRepository extends Repository<MachineHistoryEntity> {
    constructor(dataSource: DataSource);
    useMachine(useData: MachineHistoryEntity): Promise<MachineHistoryEntity>;
}
