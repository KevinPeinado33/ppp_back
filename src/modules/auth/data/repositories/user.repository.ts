import { UserModel } from '../models'
import { UserRepository } from '../../domain/repositories'
import { IUser } from '../interfaces'

export class UserImplRepository implements UserRepository {

    async findUserByEmail(email: string): Promise<IUser | null> {
        return await UserModel.findOne({ email })
    }

}
