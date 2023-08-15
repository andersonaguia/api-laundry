import { DataSource, Repository } from 'typeorm';
import { ConfigurationEntity } from './entities/configuration.entity';
export declare class ConfigurationRepository extends Repository<ConfigurationEntity> {
    constructor(dataSource: DataSource);
    createConfiguration(newConfiguration: ConfigurationEntity): Promise<ConfigurationEntity>;
    findActualConfiguration(): Promise<ConfigurationEntity[]>;
    findConfigurationHistory(): Promise<ConfigurationEntity[]>;
}
