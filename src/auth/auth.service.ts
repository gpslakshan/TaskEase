import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService
    ) { }

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
        return await this.usersService.createUser(authCredentialsDto);
    }
}
