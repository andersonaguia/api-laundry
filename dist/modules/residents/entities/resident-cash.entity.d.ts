import { ApartmentEntity, BaseEntity } from 'src/core/entities';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { ResidentEntity } from './resident.entity';
export declare class ResidentCashEntity extends BaseEntity {
    cash: number;
    resident: ResidentEntity;
    apartment: ApartmentEntity;
    user: UserEntity;
}
