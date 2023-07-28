import { Request, Response } from 'express'

import { FindAllStudentUseCase } from '../../domain/use-cases'
import { StudentRepository } from '../../domain/repositories'
import { StudentRepositoryImpl } from '../../data/repositories'

export class StudentController { 

    private studentRepository: StudentRepository

    constructor() {

        this.studentRepository = new StudentRepositoryImpl

        this.getOneByCode   = this.getOneByCode.bind( this )
        this.getAllStudents = this.getAllStudents.bind( this )

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

}
