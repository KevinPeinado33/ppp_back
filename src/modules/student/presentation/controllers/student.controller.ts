import { Request, Response } from 'express'

import { FindAllStudentUseCase , CreateListStudentsUseCase } from '../../domain/use-cases'
import { StudentRepository } from '../../domain/repositories'
import { StudentRepositoryImpl } from '../../data/repositories'
import { StudentCreateDto } from '../../domain/dtos'

export class StudentController { 

    private studentRepository: StudentRepository

    constructor() {

        this.studentRepository = new StudentRepositoryImpl

        this.getOneByCode           = this.getOneByCode.bind( this )
        this.getAllStudents         = this.getAllStudents.bind( this )
        this.postCreateListStudents = this.postCreateListStudents.bind( this )

    }

    getOneByCode(request: Request, response: Response) { }

    getAllStudents(req: Request, res: Response) {

        const { planPPP } = req.params
        
        const usecase = new FindAllStudentUseCase(
            res,
            this.studentRepository,
            planPPP
        )

        usecase.execute()

    }

    postCreateListStudents(req: Request, res: Response) {
        
        const listStudents = req.body as StudentCreateDto[]

        const usecase = new CreateListStudentsUseCase(
            res, 
            this.studentRepository,
            listStudents
        )

        usecase.execute()

    }

}
