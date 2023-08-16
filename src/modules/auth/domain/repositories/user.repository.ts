import { UserEntity } from '../../data/entities'

import { CreateUserDto } from '../dtos'

export abstract class UserRepository {

    abstract findUserByEmail(userName: string)     : Promise< UserEntity | null >
    abstract create(userCreateDto: CreateUserDto)  : Promise< UserEntity >
    abstract save(userCreated: UserEntity)         : Promise< UserEntity >
    abstract findAll()                             : Promise< UserEntity[] >
    abstract findById(id: string)                  : Promise< UserEntity | null >
    abstract findByRol(rolSearch: string)          : Promise< UserEntity[] >
    abstract findByIdWithRolesAndAccess(id: string): Promise< UserEntity | null >
    
}