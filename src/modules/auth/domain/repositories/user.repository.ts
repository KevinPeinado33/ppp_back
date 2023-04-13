import { User } from '../models'

export class UserRepository {

    async findUserByEmail(email: string) {
        return await User.findOne({ email })
    }

}
