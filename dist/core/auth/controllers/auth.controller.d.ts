import { AuthService } from '../services/auth.service';
import { ChangePasswordDTO } from '../dto/change-password.dto';
import { CredentialsDTO } from '../dto/credentials.dto';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<import("../../http/nest-response").NestResponse>;
    signIn(credentialsDto: CredentialsDTO): Promise<import("../../http/nest-response").NestResponse>;
    changePassword(data: ChangePasswordDTO): Promise<import("../../http/nest-response").NestResponse>;
}
