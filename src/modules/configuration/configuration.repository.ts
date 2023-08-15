import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { ConfigurationEntity } from './entities/configuration.entity';

@Injectable()
export class ConfigurationRepository extends Repository<ConfigurationEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(ConfigurationEntity, dataSource.createEntityManager());
  }

  async createConfiguration(
    newConfiguration: ConfigurationEntity,
  ): Promise<ConfigurationEntity> {
    console.log(newConfiguration);
    return await this.save(newConfiguration);
  }

  async findActualConfiguration(): Promise<ConfigurationEntity[]> {
    return await this.find({ order: { createdAt: 'DESC' }, take: 1 });
  }

  async findConfigurationHistory(): Promise<ConfigurationEntity[]> {
    return await this.find({order: {createdAt: 'DESC'}});
  }
}
