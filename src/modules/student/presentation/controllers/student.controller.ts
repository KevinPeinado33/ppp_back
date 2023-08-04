import { Request, Response } from 'express'

import { FindAllStudentUseCase, CreateListStudentsUseCase, FindStudentsSemesterUseCase, FindStudentsProcessOrEnd, FindStudentUseCase } from '../../domain/use-cases'
import { StudentRepository } from '../../domain/repositories'
import { StudentRepositoryImpl } from '../../data/repositories'
import { StudentCreateDto } from '../../domain/dtos'
import { PPPRepository } from '../../../ppp/domain/repositories'
import { PPPRepositoryImpl } from '../../../ppp/data/repositories'

export class StudentController {

    private studentRepository : StudentRepository
    private pppRepository     : PPPRepository
    constructor() {

        this.studentRepository = new StudentRepositoryImpl()
        this.pppRepository     = new PPPRepositoryImpl()

        this.getStudentByCode       = this.getStudentByCode.bind(this)
        this.getAllStudents         = this.getAllStudents.bind(this)
        this.getStudentsSemester    = this.getStudentsSemester.bind(this)
        this.postCreateListStudents = this.postCreateListStudents.bind(this)
        this.getStudentsProcessEnd  = this.getStudentsProcessEnd.bind( this )

    }

    getStudentByCode(req: Request, res: Response) {

        const { codeStudent } = req.params

        const usecase = new FindStudentUseCase(
            res,
            this.studentRepository,
            this.pppRepository,
            codeStudent
        )

        usecase.execute()

    }

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
