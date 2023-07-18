import { Request, Response } from 'express'

import { UserRepositoryImpl } from '../../data/repositories'
import { CreateUserDto, LoginDto } from '../../domain/dtos'
import { CreateUserUseCase, LoginUseCase } from '../../domain/use-cases'
import { UserRepository } from '../../domain/repositories'

export class AuthController {

    private userRepository: UserRepository
 
    constructor() {

        this.userRepository = new UserRepositoryImpl()

        this.postLogin    = this.postLogin.bind( this )
        this.postRegister = this.postRegister.bind( this )

    }

    postLogin(req: Request, res: Response) {

        const loginDto = req.body as LoginDto
        const usecase  = new LoginUseCase(
            res,
            loginDto,
            this.userRepository
        )

        usecase.execute()

    }

    postRegister(req: Request, res: Response) {
        
        const createUserDto = req.body as CreateUserDto
        const usecase       = new CreateUserUseCase(
            res,
            createUserDto,
            this.userRepository
        )

        usecase.execute()

    }

}
