import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDTO } from 'src/core/auth/dto/credentials.dto';
export declare class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource);
    checkCredentials(credentials: CredentialsDTO): Promise<UserEntity>;
    createUser(newUser: CreateUserDto): Promise<UserEntity>;
    hashPassword(password: string, salt: string): Promise<string>;
}
