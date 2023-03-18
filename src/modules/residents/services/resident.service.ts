import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ApartmentRepository } from 'src/modules/apartments/apartment.repository';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentRepository } from '../resident.repository';

@Injectable()
export class ResidentService {
  constructor(
    private readonly residentRepository: ResidentRepository,
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async create(newResident: CreateResidentDto): Promise<ResidentEntity> {
    const { apartment } = newResident;

    const apartmentExists = await this.apartmentRepository.getByApartment(
      apartment,
    );

    if (!apartmentExists) {
      throw new NotFoundException({
        code: 404,
        message: 'Apartment was not found',
      });
    }

    const resident = new ResidentEntity();
    const dataResident = {
      ...resident,
      ...newResident,
      apartment: apartmentExists,
    };

    try {
      const residentSaved = await this.residentRepository.createResident(
        dataResident,
      );
      delete residentSaved.createdAt;
      delete residentSaved.updatedAt;
      delete residentSaved.deletedAt;
      delete residentSaved.apartment.createdAt;
      delete residentSaved.apartment.updatedAt;
      delete residentSaved.apartment.deletedAt;

      return residentSaved;
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException({
          code: error.code,
          message: 'There is already a resident associated with this apartment',
        });
      }
      throw new BadRequestException({
        code: error.code,
        message: 'Resident was not saved',
      });
    }
  }
}
