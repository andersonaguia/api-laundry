import { BadRequestException, Injectable } from '@nestjs/common';
import { ApartmentRepository } from '../apartments.repository';
import { CreateApartmentDto } from '../dto/create-apartment.dto';
import { UpdateApartmentDto } from '../dto/update-apartment.dto';

@Injectable()
export class ApartmentsService {
  constructor(private readonly apartmentRepository: ApartmentRepository) { }

  async create(newApartment: CreateApartmentDto) {
    const { apartment } = newApartment;
    const apartmentExists = await this.apartmentRepository.getByApartment(apartment);
    if(apartmentExists){
      throw new  BadRequestException('Apartment already exists')
    }
    const apartmentSaved = await this.apartmentRepository.createApartment(newApartment);
    if(!apartmentSaved){
      throw new BadRequestException('Apartment was not saved');
    }
    return apartmentSaved;
  }

  findAll() {
    return `This action returns all apartments`;
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
