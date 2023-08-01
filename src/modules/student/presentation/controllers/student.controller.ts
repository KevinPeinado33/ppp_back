import { Request, Response } from 'express'

import { FindAllStudentUseCase, CreateListStudentsUseCase, FindStudentsSemesterUseCase, FindStudentsProcessOrEnd } from '../../domain/use-cases'
import { StudentRepository } from '../../domain/repositories'
import { StudentRepositoryImpl } from '../../data/repositories'
import { StudentCreateDto } from '../../domain/dtos'

export class StudentController {

    private studentRepository: StudentRepository

    constructor() {

        this.studentRepository = new StudentRepositoryImpl

        this.getOneByCode = this.getOneByCode.bind(this)
        this.getAllStudents = this.getAllStudents.bind(this)
        this.getStudentsSemester = this.getStudentsSemester.bind(this)
        this.postCreateListStudents = this.postCreateListStudents.bind(this)
        this.getStudentsProcessEnd = this.getStudentsProcessEnd.bind( this )

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

    getStudentsSemester(req: Request, res: Response) {
        
        const { cycle } = req.params

        const usecase = new FindStudentsSemesterUseCase(
            res,
            this.studentRepository,
            Number(cycle)
        )
        usecase.execute()
    }

    getStudentsProcessEnd(req: Request, res: Response){
        
        const { finalRate } = req.params

        const usecase = new FindStudentsProcessOrEnd(
            res,
            this.studentRepository,
            Number(finalRate)
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
