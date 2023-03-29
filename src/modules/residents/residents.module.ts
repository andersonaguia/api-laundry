import { Module } from '@nestjs/common';
import { ApartmentsModule } from '../apartments/apartments.module';
import { UsersModule } from '../users/users.module';
import { ResidentController } from './controllers/resident.controller';
import { ResidentCashRepository } from './resident-cash.repository';
import { ResidentRepository } from './resident.repository';
import { ResidentCashService } from './services/resident-cash.service';
import { ResidentService } from './services/resident.service';

@Module({
  imports: [ApartmentsModule, UsersModule],
  controllers: [ResidentController],
  providers: [
    ResidentService,
    ResidentCashService,
    ResidentRepository,
    ResidentCashRepository,
  ],
})
export class ResidentsModule {}
