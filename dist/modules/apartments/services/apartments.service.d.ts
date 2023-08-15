import { ApartmentRepository } from '../apartment.repository';
import { CreateApartmentDto } from '../dto/create-apartment.dto';
import { UpdateApartmentDto } from '../dto/update-apartment.dto';
import { ApartmentEntity } from '../entities/apartment.entity';
export declare class ApartmentsService {
    private readonly apartmentRepository;
    constructor(apartmentRepository: ApartmentRepository);
    create(newApartment: CreateApartmentDto): Promise<ApartmentEntity>;
    findAll(): Promise<ApartmentEntity[]>;
    findOne(id: number): string;
    update(id: number, updateApartmentDto: UpdateApartmentDto): string;
    remove(id: number): string;
}
