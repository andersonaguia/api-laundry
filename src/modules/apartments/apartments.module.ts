import { Module } from '@nestjs/common';
import { ApartmentRepository } from './apartments.repository';
import { ApartmentsController } from './controllers/apartments.controller';
import { ApartmentsService } from './services/apartments.service';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService, ApartmentRepository]
})
export class ApartmentsModule {}
