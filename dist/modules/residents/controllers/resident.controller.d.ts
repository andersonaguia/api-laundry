import { ChangeResidentCashDto } from '../dto/change-resident-cash.dto';
import { CreateResidentDto } from '../dto/create-resident.dto';
import { ResidentCashEntity } from '../entities/resident-cash.entity';
import { ResidentEntity } from '../entities/resident.entity';
import { ResidentCashService } from '../services/resident-cash.service';
import { ResidentService } from '../services/resident.service';
export declare class ResidentController {
    private readonly residentService;
    private readonly residentCashService;
    constructor(residentService: ResidentService, residentCashService: ResidentCashService);
    findAll(): Promise<ResidentEntity[]>;
    create(residentData: CreateResidentDto): Promise<ResidentEntity>;
    remove(id: number): Promise<string>;
    changeCash(data: ChangeResidentCashDto, req: any): Promise<ResidentCashEntity>;
    getAtualCashByApartment(id: number): Promise<ResidentCashEntity[]>;
}
