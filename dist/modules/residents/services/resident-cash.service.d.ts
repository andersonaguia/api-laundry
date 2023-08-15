import { ApartmentRepository } from 'src/modules/apartments/apartment.repository';
import { ChangeResidentCashDto } from '../dto/change-resident-cash.dto';
import { ResidentCashEntity } from '../entities/resident-cash.entity';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentCashRepository } from '../resident-cash.repository';
import { ResidentRepository } from '../resident.repository';
export declare class ResidentCashService {
    private readonly residentRepository;
    private readonly apartmentRepository;
    private readonly residentCashRepository;
    constructor(residentRepository: ResidentRepository, apartmentRepository: ApartmentRepository, residentCashRepository: ResidentCashRepository);
    getAtualCashByApartment(apartmentId: number): Promise<ResidentCashEntity[]>;
    changeCash(data: ChangeResidentCashDto, req: any): Promise<ResidentCashEntity>;
    formatResidentResponse(resident: ResidentEntity): ResidentEntity;
}
