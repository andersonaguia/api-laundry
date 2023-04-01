import { Module } from '@nestjs/common';
import { ConfigurationRepository } from './configuration.repository';
import { ConfigurationController } from './controllers/configuration.controller';
import { ConfigurationService } from './services/configuration.service';

@Module({
  imports: [],
  controllers: [ConfigurationController],
  providers: [ConfigurationService, ConfigurationRepository],
  exports: [],
})
export class ConfigurationModule {}
