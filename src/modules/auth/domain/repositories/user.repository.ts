import { IUser } from '../../data/interfaces'

export interface UserRepository {

    findUserByEmail(email: string): Promise< IUser | null >
    
}