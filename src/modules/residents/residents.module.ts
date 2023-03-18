import { Module } from '@nestjs/common';
import { ApartmentsModule } from '../apartments/apartments.module';
import { ResidentController } from './controllers/resident.controller';
import { ResidentRepository } from './resident.repository';
import { ResidentService } from './services/resident.service';

@Module({
  imports: [ApartmentsModule],
  controllers: [ResidentController],
  providers: [ResidentService, ResidentRepository],
})
export class ResidentsModule {}
