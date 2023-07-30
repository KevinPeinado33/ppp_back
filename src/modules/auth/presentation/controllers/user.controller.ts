import { Request, Response } from 'express'

import { CreateUserUseCase, FindAllUserUseCase, FindUsersByRolUseCase } from '../../domain/use-cases'
import { CreateUserDto } from '../../domain/dtos'
import { UserRepository } from '../../domain/repositories'
import { UserRepositoryImpl } from '../../data/repositories'

export class UserController {

    private userRepository: UserRepository

    constructor() {

        this.userRepository = new UserRepositoryImpl()

        this.postRegister = this.postRegister.bind( this )
        this.getAllUsers  = this.getAllUsers.bind( this )
        this.getUsersByRol = this.getUsersByRol.bind( this )
    
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

        const usecase = new FindAllUserUseCase(
            res, 
            this.userRepository
        )

        usecase.execute()

    }

    getUsersByRol(req: Request, res: Response) {

        const { rolSearch } = req.params
        const usecase       = new FindUsersByRolUseCase(
            res,
            this.userRepository,
            rolSearch
        )

        usecase.execute()

    }

}