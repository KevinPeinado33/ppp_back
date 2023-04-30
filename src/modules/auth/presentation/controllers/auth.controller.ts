import { Request, Response } from 'express'

import { LoginUseCase } from '../../domain/use-cases'
import { LoginEntity } from '../../domain/entities'
import { UserImplRepository } from '../../data/repositories'
import { UserRepository } from '../../domain/repositories'

export class AuthController {

    private userRepository: UserRepository
 
    constructor() {

        this.userRepository = new UserImplRepository()

        this.postLogin    = this.postLogin.bind( this )
        this.postRegister = this.postRegister.bind( this )

    }

    postLogin(req: Request, res: Response) {

        const loginDto = req.body as LoginEntity
        const usecase  = new LoginUseCase(
            res,
            loginDto,
            this.userRepository
        )

        usecase.execute()

    }

    postRegister(req: Request, res: Response) { }

}
