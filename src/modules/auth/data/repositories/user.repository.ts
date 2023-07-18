import { AppDataSource } from '../../../../config/database'
import { CreateUserDto } from '../../domain/dtos'

import { UserRepository } from '../../domain/repositories'
import { UserEntity } from '../entities'

export class UserRepositoryImpl implements UserRepository {

    private userRepository = AppDataSource.getRepository( UserEntity )

    constructor() { }

    findUserByEmail(userName: string): Promise< UserEntity | null > {
        return this.userRepository.findOneBy({ userName })
    }

    async create(userCreateDto: CreateUserDto): Promise< UserEntity > {
        return await this.userRepository.create( userCreateDto )
    }

    save(userCreated: UserEntity): Promise< UserEntity > {
        return this.userRepository.save( userCreated )
    }

}
