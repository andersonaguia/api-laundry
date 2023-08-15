import { Injectable } from '@nestjs/common';
import { timeStamp } from 'console';
import { ConfigurationRepository } from '../configuration.repository';
import { CreateConfigDto } from '../dto/create-configuration.dto';
import { ConfigurationEntity } from '../entities/configuration.entity';

@Injectable()
export class ConfigurationService {
  constructor(
    private readonly configurationRepository: ConfigurationRepository,
  ) {}

  async create(
    newConfig: CreateConfigDto,
    req: any,
  ): Promise<ConfigurationEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const { startTime, closingTime, minimumUsageTimeInHours, maximumUsageTimeInHours, price } = newConfig;
        const { id } = req.user;
        console.log(newConfig);
        const configuration = new ConfigurationEntity();
        configuration.startTime = new Date(startTime);
        configuration.closingTime = new Date(closingTime);
        configuration.minimumUsageTime = minimumUsageTimeInHours;
        configuration.maximumUsageTimeInHours = maximumUsageTimeInHours;
        configuration.price = price;
        configuration.user = id;

        const hour = new Date('12/03/2022 17:00:23');
        console.log(hour);
        console.log(hour.getHours());
        console.log(hour.getMinutes());
        console.log(hour.getSeconds());

        const configurationSaved =
          await this.configurationRepository.createConfiguration(configuration);
        resolve(configurationSaved);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findActualConfiguration(): Promise<ConfigurationEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const actualConfiguration =
          await this.configurationRepository.findActualConfiguration();

        resolve(actualConfiguration);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findConfigurationHistory(): Promise<ConfigurationEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const configurationHistory =
          await this.configurationRepository.findConfigurationHistory();

        resolve(configurationHistory);
      } catch (error) {
        reject(error);
      }
    });
  }
}
