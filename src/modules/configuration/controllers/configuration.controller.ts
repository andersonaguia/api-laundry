import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/core/auth/guards/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import { UserRole } from 'src/modules/users/enum/user.role';
import { CreateConfigDto } from '../dto/create-configuration.dto';
import { ConfigurationEntity } from '../entities/configuration.entity';
import { ConfigurationService } from '../services/configuration.service';

@Controller('configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @Roles(UserRole.MANAGER)
  @Roles(UserRole.SUPERVISOR)
  @Get('/actual')
  async findActualConfiguration(): Promise<ConfigurationEntity[]> {
    return await this.configurationService.findActualConfiguration();
  }
  
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @Roles(UserRole.MANAGER)
  @Roles(UserRole.SUPERVISOR)
  @Get('/history')
  async findConfigurationHistory(): Promise<ConfigurationEntity[]> {
    return await this.configurationService.findConfigurationHistory();
  }

  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @Roles(UserRole.MANAGER)
  @Post('/create')
  async create(
    @Body() configData: CreateConfigDto,
    @Request() req: any,
  ): Promise<ConfigurationEntity> {
    return await this.configurationService.create(configData, req);
  }
}
