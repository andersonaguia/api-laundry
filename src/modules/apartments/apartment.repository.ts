import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { ApartmentEntity } from './entities/apartment.entity';
import { CreateApartmentDto } from './dto/create-apartment.dto';

@Injectable()
export class ApartmentRepository extends Repository<ApartmentEntity> {
  constructor(@InjectDataSource() dataSource: DataSource) {
    super(ApartmentEntity, dataSource.createEntityManager());
  }

  async getByApartment(apartment: number): Promise<ApartmentEntity> {
    const apt = await this.findOne({ where: { apartment } });

    if (!apt) {
      throw new BadRequestException({
        code: 400,
        message: 'Apartment was not found',
      });
    }

    return apt;
  }

  async createApartment(
    newApartment: CreateApartmentDto,
  ): Promise<ApartmentEntity> {
    return new Promise(async (resolve, reject) => {
      try {
        const apartment = new ApartmentEntity();
        const dataApartment = {
          ...apartment,
          ...newApartment,
        };
        const apartmentSaved = await this.save(dataApartment);
        resolve(apartmentSaved);
      } catch (error) {
        reject(error);
      }
    });
  }
}
