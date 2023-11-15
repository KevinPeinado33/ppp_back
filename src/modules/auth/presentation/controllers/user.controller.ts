import { Request, Response } from 'express'

import { CreateUserUseCase, FindAllUserUseCase, FindUsersByRolUseCase } from '../../domain/use-cases'
import { CreateUserDto } from '../../domain/dtos'
import { UserRepository } from '../../domain/repositories'
import { UserRepositoryImpl } from '../../data/repositories'
import { RolRepository } from '../../domain/repositories/rol.repository'
import { RolRepositoryImpl } from '../../data/repositories/rol.repository'

export class UserController {

    private userRepository: UserRepository
    private roleRepository: RolRepository

    constructor() {

        this.userRepository = new UserRepositoryImpl()
        this.roleRepository = new RolRepositoryImpl()

        this.postRegister = this.postRegister.bind( this )
        this.getAllUsers  = this.getAllUsers.bind( this )
        this.getUsersByRol = this.getUsersByRol.bind( this )
    
    }

    postRegister(req: Request, res: Response) {
        
        const createUserDto = req.body as CreateUserDto
        const usecase       = new CreateUserUseCase(
            res,
            createUserDto,
            this.userRepository,
            this.roleRepository
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