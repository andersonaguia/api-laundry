import { UserRole } from '../enum/user.role';
import { BaseEntity } from 'src/core/entities';
export declare class UserEntity extends BaseEntity {
    fullName: string;
    email: string;
    password: string;
    occupation: string;
    salt: string;
    role: UserRole;
    checkPassword(password: string): Promise<boolean>;
}
