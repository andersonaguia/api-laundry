import {
  BadRequestException,
  ConflictException,
  Injectable,
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
