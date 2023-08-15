import { ApartmentEntity } from 'src/core/entities';
import { BaseEntity } from '../../../core/entities/base.entity';
export declare class ResidentEntity extends BaseEntity {
    name: string;
    email: string;
    phone: string;
    apartment: ApartmentEntity;
}
