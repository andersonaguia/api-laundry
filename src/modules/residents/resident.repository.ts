import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { ResidentEntity } from './entities/resident.entity';

@Injectable()
export class ResidentRepository extends Repository<ResidentEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(ResidentEntity, dataSource.createEntityManager());
  }

  async getByEmail(email: string): Promise<ResidentEntity> {
    return this.findOne({ where: { email } });
  }

  async createResident(newResident: ResidentEntity): Promise<ResidentEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const residentSaved = await this.save(newResident);
        resolve(residentSaved);
      } catch (error) {
        reject(error);
      }
    });
  }
}
