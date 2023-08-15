import { ConfigurationRepository } from '../configuration.repository';
import { CreateConfigDto } from '../dto/create-configuration.dto';
import { ConfigurationEntity } from '../entities/configuration.entity';
export declare class ConfigurationService {
    private readonly configurationRepository;
    constructor(configurationRepository: ConfigurationRepository);
    create(newConfig: CreateConfigDto, req: any): Promise<ConfigurationEntity>;
    findActualConfiguration(): Promise<ConfigurationEntity[]>;
    findConfigurationHistory(): Promise<ConfigurationEntity[]>;
}
