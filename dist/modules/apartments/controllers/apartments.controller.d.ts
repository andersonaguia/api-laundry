import { CreateApartmentDto } from "../dto/create-apartment.dto";
import { UpdateApartmentDto } from "../dto/update-apartment.dto";
import { ApartmentsService } from "../services/apartments.service";
import { ApartmentEntity } from "../entities/apartment.entity";
export declare class ApartmentsController {
    private readonly apartmentsService;
    constructor(apartmentsService: ApartmentsService);
    create(apartmentData: CreateApartmentDto): Promise<ApartmentEntity>;
    findAll(): Promise<ApartmentEntity[]>;
    findOne(id: string): string;
    update(id: string, updateApartmentDto: UpdateApartmentDto): string;
    remove(id: string): string;
}
