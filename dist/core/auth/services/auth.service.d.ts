import { JwtService } from '@nestjs/jwt';
import { CredentialsDTO } from '../dto/credentials.dto';
import { ChangePasswordDTO } from '../dto/change-password.dto';
import { UpdateUserPasswordDTO } from '../dto/updateUserPassword.dto';
import { TokenDTO } from '../dto/token.dto';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UserEntity } from 'src/modules/users/entities/user.entity';
import { UserRepository } from 'src/modules/users/user.repository';
export declare class AuthService {
    private jwtService;
    private readonly userRepository;
    constructor(jwtService: JwtService, userRepository: UserRepository);
    signUp(userData: CreateUserDto): Promise<UserEntity>;
    signIn(credentials: CredentialsDTO): Promise<TokenDTO>;
    checkCredentials(credentials: CredentialsDTO): Promise<UserEntity>;
    hashPassword(password: string, salt: string): Promise<string>;
    validateToken(jwtToken: string): Promise<unknown>;
    decodedToken(jwtToken: string): string | {
        [key: string]: any;
    };
    changePassword(data: ChangePasswordDTO): Promise<number>;
    updateUserPassword(id: number, dataToUpdate: UpdateUserPasswordDTO): Promise<number>;
}
