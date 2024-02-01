import { AuthDatasource } from "@domain/datasources/auth.datasource";
import { ExistsUserDto } from "@domain/dtos/auth/exists-user.dto";
import { IdentifyUserDto } from "@domain/dtos/auth/identify-user.dto";
import { LoginUserDto } from "@domain/dtos/auth/login-user.dto";
import { RegisterUserDto } from "@domain/dtos/auth/register-user.dto";
import { UserEntity } from "@domain/entites/user.entity";
import { AuthRepository } from "@domain/repositories/auth.repository";



export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly authDatasource:AuthDatasource,
    ){}
    exists(existsUserDto: ExistsUserDto): Promise<boolean> {
        return this.authDatasource.exists(existsUserDto);
    }
    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasource.login(loginUserDto);
    }
    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.register(registerUserDto);
    }

    profile(identifyUserDto: IdentifyUserDto): Promise<UserEntity> {
        return this.authDatasource.profile(identifyUserDto);
    }

}