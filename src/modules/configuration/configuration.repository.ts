import { Injectable } from "@nestjs/common";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSource, MoreThan, Repository } from "typeorm";
import { ConfigurationEntity } from "./entities/configuration.entity";

@Injectable()
export class ConfigurationRepository extends Repository<ConfigurationEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(ConfigurationEntity, dataSource.createEntityManager());
  }

  async createConfiguration(
    newConfiguration: ConfigurationEntity
  ): Promise<ConfigurationEntity> {
    console.log(newConfiguration);
    return await this.save(newConfiguration);
  }

  async findActualConfiguration(): Promise<ConfigurationEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const actualConfig = await this.findOne({
          where: {
            id: MoreThan(0),
          },
          order: { createdAt: "DESC" },
        });

        resolve(actualConfig);
      } catch (error) {
        reject(error);
      }
    });
  }

  async findConfigurationHistory(): Promise<ConfigurationEntity[]> {
    return await this.find({ order: { createdAt: "DESC" } });
  }
}
