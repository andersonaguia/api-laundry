import { DataSource, Repository } from 'typeorm';
import { ApartmentEntity } from './entities/apartment.entity';
import { CreateApartmentDto } from './dto/create-apartment.dto';
export declare class ApartmentRepository extends Repository<ApartmentEntity> {
    constructor(dataSource: DataSource);
    getByApartment(apartment: number): Promise<ApartmentEntity>;
    getById(id: number): Promise<ApartmentEntity>;
    createApartment(newApartment: CreateApartmentDto): Promise<ApartmentEntity>;
}
