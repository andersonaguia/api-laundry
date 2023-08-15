import { ApartmentEntity, BaseEntity } from 'src/core/entities';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { MachineEntity } from './machine.entity';
export declare class MachineHistoryEntity extends BaseEntity {
    isOn: boolean;
    machine: MachineEntity;
    apartment: ApartmentEntity;
    user: UserEntity;
}
