import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ApartmentRepository } from 'src/modules/apartments/apartment.repository';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { UpdateResidentDto } from '../dto/update-resident.dto';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentRepository } from '../resident.repository';

@Injectable()
export class ResidentService {
  constructor(
    private readonly residentRepository: ResidentRepository,
    private readonly apartmentRepository: ApartmentRepository,
  ) {}

  async findAll(): Promise<ResidentEntity[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const allResidents = await this.residentRepository.getAll();
        const residents = allResidents.map((resident) => {
          return this.formatResidentResponse(resident);
        });
        resolve(residents);
      } catch (error) {
        reject(error);
      }
    });
  }

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

      const formattedResident = this.formatResidentResponse(residentSaved);

      return formattedResident;
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

  async remove(id: number): Promise<string> {
    return new Promise(async (resolve, reject) => {
      const residentExists = await this.residentRepository.getById(id);
      if (!residentExists) {
        throw new NotFoundException('Resident is not found');
      }
      try {
        await this.residentRepository.removeResident(id);

        resolve('Successfully deleted resident');
      } catch (error) {
        reject(error);
      }
    });
  }

  async update(id: number, residentData: UpdateResidentDto): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const residentExists = await this.residentRepository.getById(id);

        if (!residentExists) {
          throw new NotFoundException('Resident was not found');
        }
        const resident = new ResidentEntity();
        resident.updatedAt = new Date();

        const residentToUpdate = {
          ...resident,
          ...residentData,
        };
        const residentUpdated = await this.residentRepository.updateResident(
          id,
          residentToUpdate,
        );

        resolve(residentUpdated);
      } catch (error) {
        reject(error);
      }
    });
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
