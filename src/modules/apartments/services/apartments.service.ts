import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { ApartmentRepository } from '../apartment.repository';
import { CreateApartmentDto } from '../dto/create-apartment.dto';
import { UpdateApartmentDto } from '../dto/update-apartment.dto';
import { ApartmentEntity } from '../entities/apartment.entity';

@Injectable()
export class ApartmentsService {
  constructor(private readonly apartmentRepository: ApartmentRepository) {}

  async create(newApartment: CreateApartmentDto) {
    const { apartment } = newApartment;
    const apartmentExists = await this.apartmentRepository.getByApartment(
      apartment,
    );
    if (apartmentExists) {
      throw new ConflictException({
        code: 409,
        message: 'Apartment already exists',
      });
    }

    try {
      const apartmentSaved = await this.apartmentRepository.createApartment(
        newApartment,
      );

      return apartmentSaved;
    } catch (error) {
      throw new BadRequestException({
        code: error.code,
        message: 'Apartment was not saved',
      });
    }
  }

  findAll(): Promise <ApartmentEntity[]> {
    return new Promise(async (resolve, reject) => {
      try{
        const apartments = await this.apartmentRepository.find();
        resolve(apartments);

      }catch(error){
        reject(error)
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} apartment`;
  }

  update(id: number, updateApartmentDto: UpdateApartmentDto) {
    return `This action updates a #${id} apartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartment`;
  }
}
