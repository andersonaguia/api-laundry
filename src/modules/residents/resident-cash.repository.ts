import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { ResidentCashEntity } from './entities/resident-cash.entity';

@Injectable()
export class ResidentCashRepository extends Repository<ResidentCashEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(ResidentCashEntity, dataSource.createEntityManager());
  }

  async changeCash(newCash: ResidentCashEntity): Promise<ResidentCashEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const residentCashSaved = await this.save(newCash);
        resolve(residentCashSaved);
      } catch (error) {
        reject(error);
      }
    });
  }
}
