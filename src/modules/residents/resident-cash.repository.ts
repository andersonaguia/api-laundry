import { Injectable } from '@nestjs/common';
import { DataSource, Equal, Repository } from 'typeorm';
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

  async getAtualCashByApartment(
    apartment: number,
  ): Promise<ResidentCashEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const items = await this.find({
          where: {
            apartment: Equal(apartment),
          },
          order: {
            createdAt: 'DESC',
          },
        });
        resolve(items);
      } catch (error) {
        reject(error);
      }
    });
  }
}
