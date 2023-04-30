import { Request, Response } from 'express'

import { StudentRepository } from '../../domain/repositories'
import { CreateStudentUseCase, GetAllStudentUseCase } from '../../domain/use-cases'
import { StudentCreateEntity } from '../../domain/entities'
import { StudentImplRepository } from '../../data/repositories'
import { UserRepository } from '../../../auth/domain/repositories/user.repository';
import { UserImplRepository } from '../../../auth/data/repositories'

export class StudentController { 

    private studentRepository : StudentRepository
    private userRepository    : UserRepository

    constructor() {

        this.studentRepository = new StudentImplRepository()
        this.userRepository    = new UserImplRepository()

        this.postCreate   = this.postCreate.bind( this )
        this.getOneByCode = this.getOneByCode.bind( this )
        this.getAll       = this.getAll.bind( this )

    }

    postCreate(request: Request, response: Response) {

        const studentCreate = request.body as StudentCreateEntity
        
        const usecase       = new CreateStudentUseCase(
            response,
            this.studentRepository,
            this.userRepository,
            studentCreate
        )

        usecase.execute()

    }

    getOneByCode(request: Request, response: Response) { }

    getAll(request: Request, response: Response) {
        const usecase = new GetAllStudentUseCase(
            response,
            this.studentRepository
        )

        usecase.execute()

    }

}
