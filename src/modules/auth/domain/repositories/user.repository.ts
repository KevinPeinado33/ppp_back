import { IUser } from '../../data/interfaces'
import { UserCreateEntity } from '../entities'

export interface UserRepository {

    findUserByEmail(username: string)    : Promise< IUser | null >
    create(userCreate: UserCreateEntity ): Promise< IUser >
    
}