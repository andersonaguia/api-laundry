import { UserRole } from '../enum/user.role';
export declare class CreateUserDto {
    readonly fullName: string;
    readonly email: string;
    readonly password: string;
    readonly passwordConfirmation: string;
    readonly occupation: string;
    readonly role: UserRole;
}
