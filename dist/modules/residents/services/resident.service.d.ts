import { ApartmentRepository } from 'src/modules/apartments/apartment.repository';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { UpdateResidentDto } from '../dto/update-resident.dto';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentRepository } from '../resident.repository';
export declare class ResidentService {
    private readonly residentRepository;
    private readonly apartmentRepository;
    constructor(residentRepository: ResidentRepository, apartmentRepository: ApartmentRepository);
    findAll(): Promise<ResidentEntity[]>;
    create(newResident: CreateResidentDto): Promise<ResidentEntity>;
    remove(id: number): Promise<string>;
    update(id: number, residentData: UpdateResidentDto): Promise<string>;
    formatResidentResponse(resident: ResidentEntity): ResidentEntity;
}
