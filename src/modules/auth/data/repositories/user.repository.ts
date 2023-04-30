import { UserModel } from '../models'
import { UserRepository } from '../../domain/repositories'
import { IUser } from '../interfaces'
import { UserCreateEntity } from '../../domain/entities'

export class UserImplRepository implements UserRepository {

    constructor() { }

    async findUserByEmail(username: string): Promise< IUser | null > {
        return await UserModel.findOne({ username })
    }

    async create(userCreate: UserCreateEntity ): Promise< IUser > {
        return await UserModel.create( userCreate )
    }

}
