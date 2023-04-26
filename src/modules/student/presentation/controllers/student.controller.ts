import { Request, Response } from 'express'

import { StudentRepository } from '../../domain/repositories'
import { CreatStudentUseCase } from '../../domain/use-cases'
import { StudentCreateEntity } from '../../domain/entities'
import { StudentImplRepository } from '../../data/repositories'

export class StudentController { 

    private studentRepository: StudentRepository

    constructor() {

        this.studentRepository = new StudentImplRepository()

        this.postCreate   = this.postCreate.bind( this )
        this.getOneByCode = this.getOneByCode.bind( this )

    }

    postCreate(request: Request, response: Response) {

        const studentCreate = request.body as StudentCreateEntity
        const usecase       = new CreatStudentUseCase(
            response,
            this.studentRepository,
            studentCreate
        )

        usecase.execute()

    }

    getOneByCode(request: Request, response: Response) { }

}
