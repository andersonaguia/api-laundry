import { BaseEntity } from 'src/core/entities';
import { UserEntity } from 'src/modules/users/entities/user.entity';
export declare class ConfigurationEntity extends BaseEntity {
    startTime: Date;
    closingTime: Date;
    minimumUsageTime: number;
    maximumUsageTimeInHours: number;
    price: number;
    user: UserEntity;
}
