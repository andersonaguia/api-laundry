import { Injectable, NotFoundException } from '@nestjs/common';
import { ApartmentEntity } from 'src/core/entities';
import { ApartmentRepository } from 'src/modules/apartments/apartment.repository';
import { ChangeResidentCashDto } from '../dto/change-resident-cash.dto';
import { ResidentCashEntity } from '../entities/resident-cash.entity';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentCashRepository } from '../resident-cash.repository';
import { ResidentRepository } from '../resident.repository';

@Injectable()
export class ResidentCashService {
  constructor(
    private readonly residentRepository: ResidentRepository,
    private readonly apartmentRepository: ApartmentRepository,
    private readonly residentCashRepository: ResidentCashRepository,
  ) {}

  async changeCash(data: ChangeResidentCashDto, req: any) {
    const resident = await this.residentRepository.getById(data.residentId);

    if (!resident) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Resident was not found',
      });
    }

    const newCash = new ResidentCashEntity();
    newCash.user = req.user;
    newCash.apartment = resident.apartment;
    newCash.resident = resident;
    newCash.cash = data.cash;

    const residentCashUpdated = await this.residentCashRepository.changeCash(
      newCash,
    );

    return residentCashUpdated;
  }

  formatResidentResponse(resident: ResidentEntity): ResidentEntity {
    delete resident.createdAt;
    delete resident.updatedAt;
    delete resident.deletedAt;
    delete resident.apartment.createdAt;
    delete resident.apartment.updatedAt;
    delete resident.apartment.deletedAt;
    return resident;
  }
}
