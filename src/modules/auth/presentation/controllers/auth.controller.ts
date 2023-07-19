import { Request, Response, response } from 'express'

import { UserRepositoryImpl } from '../../data/repositories'
import { CreateUserDto, LoginDto } from '../../domain/dtos'
import { CreateUserUseCase, LoginUseCase } from '../../domain/use-cases'
import { UserRepository } from '../../domain/repositories'
import { FindAllUserUseCase } from '../../domain/use-cases/find-all-user.usecase'

export class AuthController {

    private userRepository: UserRepository
 
    constructor() {

        this.userRepository = new UserRepositoryImpl()

        this.postLogin    = this.postLogin.bind( this )
        this.postRegister = this.postRegister.bind( this )
        this.getAllUsers  = this.getAllUsers.bind( this )

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

    getAllUsers(req: Request, res: Response) {

        const usecase = new FindAllUserUseCase(res, this.userRepository)
        usecase.execute()

    }

}
