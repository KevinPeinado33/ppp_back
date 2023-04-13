import { User } from '../entities'

export class UserRepository {

    async findUserByEmail(email: string) {
        return await User.findOne({ email })
    }

}
