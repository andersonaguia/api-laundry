import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { MachineHistoryEntity } from './entities/machine-history.entity';

@Injectable()
export class MachineHistoryRepository extends Repository<MachineHistoryEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(MachineHistoryEntity, dataSource.createEntityManager());
  }
  async useMachine(
    useData: MachineHistoryEntity,
  ): Promise<MachineHistoryEntity> {
    return await this.save(useData);
  }
}
