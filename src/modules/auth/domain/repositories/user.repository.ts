import { UserEntity } from '../../data/entities'

import { CreateUserDto } from '../dtos'

export interface UserRepository {

    findUserByEmail(userName: string)     : Promise< UserEntity | null >
    create(userCreateDto: CreateUserDto)  : Promise< UserEntity >
    save(userCreated: UserEntity)         : Promise< UserEntity >
    findAll()                             : Promise< UserEntity[] >
    findById(id: string)                  : Promise< UserEntity | null >
    findByRol(rolSearch: string)          : Promise< UserEntity[] >
    
}