import { Request, Response } from 'express'

import { FindAllStudentUseCase, CreateListStudentsUseCase, FindStudentsSemesterUseCase, FindStudentsProcessOrEnd, FindStudentUseCase, GetProfileByIdUseCase } from '../../domain/use-cases'
import { StudentRepository } from '../../domain/repositories'
import { StudentRepositoryImpl } from '../../data/repositories'
import { StudentCreateDto, StudentCreateOneSelfDto } from '../../domain/dtos'
import { PPPRepository } from '../../../ppp/domain/repositories'
import { PPPRepositoryImpl } from '../../../ppp/data/repositories'
import { CreateOneSelfStudentUseCase } from '../../domain/use-cases/create-oneself-student.usecase'
import { UserRepository } from '../../../auth/domain/repositories'
import { UserRepositoryImpl } from '../../../auth/data/repositories'
import { RolRepository } from '../../../auth/domain/repositories/rol.repository';
import { RolRepositoryImpl } from '../../../auth/data/repositories/rol.repository'

export class StudentController {

    private studentRepository : StudentRepository
    private pppRepository     : PPPRepository
    private userRepository    : UserRepository
    private rolRepository: RolRepository


    constructor() {

        this.studentRepository = new StudentRepositoryImpl()
        this.pppRepository     = new PPPRepositoryImpl()
        this.userRepository    = new UserRepositoryImpl()
        this.rolRepository     = new RolRepositoryImpl()

        this.getStudentByCode       = this.getStudentByCode.bind(this)
        this.getAllStudents         = this.getAllStudents.bind(this)
        this.getStudentsSemester    = this.getStudentsSemester.bind(this)
        this.postCreateListStudents = this.postCreateListStudents.bind(this)
        this.getStudentsProcessEnd  = this.getStudentsProcessEnd.bind( this )
        this.postCreateStudent      = this.postCreateStudent.bind( this )
        this.getStudentBId = this.getStudentBId.bind( this )

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

    getStudentBId(req: Request, res: Response) {

        const { id } = req.params

        const usecase = new GetProfileByIdUseCase(
            res,
            this.studentRepository,
            this.userRepository,
            this.pppRepository,
            id
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

    getStudentsProcessEnd(req: Request, res: Response) {
        
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

    postCreateStudent(req: Request, res: Response) {

        const createStudentDto = req.body as StudentCreateOneSelfDto

        const usecase = new CreateOneSelfStudentUseCase(
            res,
            this.studentRepository,
            this.userRepository,
            createStudentDto,
            this.rolRepository
        )

        usecase.execute()

    }

}
