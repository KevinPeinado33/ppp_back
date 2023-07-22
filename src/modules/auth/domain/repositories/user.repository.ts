import { UserEntity } from '../../data/entities'

import { CreateUserDto } from '../dtos'

export interface UserRepository {

    findUserByEmail(userName: string)     : Promise< UserEntity | null >
    create(userCreateDto: CreateUserDto)  : Promise< UserEntity >
    save(userCreated: UserEntity)         : Promise< UserEntity >
    findAll()                             : Promise< UserEntity[] >
    
}