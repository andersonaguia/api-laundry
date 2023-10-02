import { ChangeResidentCashDto } from "../dto/change-resident-cash.dto";
import { ResidentCashEntity } from "../entities/resident-cash.entity";
import { ResidentEntity } from "../entities/resident.entity";
import { ResidentCashRepository } from "../resident-cash.repository";
import { ResidentRepository } from "../resident.repository";
export declare class ResidentCashService {
    private readonly residentRepository;
    private readonly residentCashRepository;
    constructor(residentRepository: ResidentRepository, residentCashRepository: ResidentCashRepository);
    getAtualCashByApartment(apartmentId: number): Promise<ResidentCashEntity>;
    changeCash(data: ChangeResidentCashDto, req: any): Promise<ResidentCashEntity>;
    formatResidentResponse(resident: ResidentEntity): ResidentEntity;
}
