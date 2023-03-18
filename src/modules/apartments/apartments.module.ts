import { Module } from '@nestjs/common';
import { ApartmentRepository } from './apartment.repository';
import { ApartmentsController } from './controllers/apartments.controller';
import { ApartmentsService } from './services/apartments.service';

@Module({
  controllers: [ApartmentsController],
  providers: [ApartmentsService, ApartmentRepository],
  exports: [ApartmentRepository],
})
export class ApartmentsModule {}
