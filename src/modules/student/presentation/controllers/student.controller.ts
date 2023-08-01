import { Request, Response } from 'express'

import { FindAllStudentUseCase, CreateListStudentsUseCase, FindStudentsSemesterUseCase, FindStudentsProcessOrEnd } from '../../domain/use-cases'
import { StudentRepository } from '../../domain/repositories'
import { StudentRepositoryImpl } from '../../data/repositories'
import { StudentCreateDto } from '../../domain/dtos'
import { UserRepository } from '../../../auth/domain/repositories'
import { UserRepositoryImpl } from '../../../auth/data/repositories'

export class StudentController {

    private studentRepository: StudentRepository
    private userRepository: UserRepository

    constructor() {

        this.studentRepository = new StudentRepositoryImpl
        this.userRepository = new UserRepositoryImpl

        this.getOneByCode = this.getOneByCode.bind(this)
        this.getAllStudents = this.getAllStudents.bind(this)
        this.getStudentsSemester = this.getStudentsSemester.bind(this)
        this.postCreateListStudents = this.postCreateListStudents.bind(this)

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
        const cyclenumber = parseInt(cycle)

        const usecase = new FindStudentsSemesterUseCase(
            res,
            this.studentRepository,
            cyclenumber
        )
        usecase.execute()
    }

    getStudentsProcessEnd(req: Request, res: Response){
        const {finalRate} = req.params
        const finalratenum = parseInt(finalRate)
        const usecase = new FindStudentsProcessOrEnd(
            res,
            this.studentRepository,
            this.userRepository,
            finalratenum
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
