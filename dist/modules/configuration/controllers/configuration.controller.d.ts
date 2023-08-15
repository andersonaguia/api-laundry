import { CreateConfigDto } from '../dto/create-configuration.dto';
import { ConfigurationEntity } from '../entities/configuration.entity';
import { ConfigurationService } from '../services/configuration.service';
export declare class ConfigurationController {
    private readonly configurationService;
    constructor(configurationService: ConfigurationService);
    findActualConfiguration(): Promise<ConfigurationEntity[]>;
    findConfigurationHistory(): Promise<ConfigurationEntity[]>;
    create(configData: CreateConfigDto, req: any): Promise<ConfigurationEntity>;
}
