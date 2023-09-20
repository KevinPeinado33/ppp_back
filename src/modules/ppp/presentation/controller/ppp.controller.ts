import { Response, Request } from "express"

import { CompanyRepositoryImpl, PPPRepositoryImpl } from "../../data/repositories"
import { CompanyRepositroy, PPPRepository } from "../../domain/repositories"
import { AssingAdvisorPppUseCase } from "../../domain/use-cases/assing-advisor-ppp.usecases"
import { UserRepositoryImpl } from "../../../auth/data/repositories"
import { UserRepository } from "../../../auth/domain/repositories"
import { CreateCompanyPPPDto } from "../../domain/dtos/create-ppp-company"
import { ClosePppUsecase, RegisterLetterAceptanceUseCase, SaveCompanyUseCase } from "../../domain/use-cases"
import { UpdateIntershipHourUseCase } from "../../domain/use-cases/update-intership-hour.usecase"
import { UpdateRegisterAceptanceDto } from "../../domain/dtos/update-register-aceptance"
import { ClosePppDto } from "../../domain/dtos"
import { StudentRepository } from "../../../student/domain/repositories"
import { StudentRepositoryImpl } from "../../../student/data/repositories"

export class PPPController{

  private pppRepository   : PPPRepository
  private userRepository  : UserRepository
  private companyRepository: CompanyRepositroy
  private studentRepository: StudentRepository

  constructor() {

     this.pppRepository = new PPPRepositoryImpl(),
     this.userRepository = new UserRepositoryImpl(),
     this.companyRepository = new CompanyRepositoryImpl(),
     this.studentRepository = new StudentRepositoryImpl()

        
        this.updateAssingAdvisor = this.updateAssingAdvisor.bind( this )
        this.postcompanyPPP = this.postcompanyPPP.bind(this)
        this.updateIntershipHours = this.updateIntershipHours.bind(this)
        this.updateRegisterLetterAceptance = this.updateRegisterLetterAceptance.bind(this)
        this.updateClosePpp = this.updateClosePpp.bind(this)
    }

    updateAssingAdvisor(req: Request, res: Response) {
        const { idPPP, advisorID } = req.params
        const usecase = new AssingAdvisorPppUseCase(
            res,
            this.pppRepository,
            idPPP,
            advisorID,
            this.userRepository
        )

        usecase.execute()
    }

    postcompanyPPP(req: Request, res: Response){
        const createCompanyDto = req.body as CreateCompanyPPPDto
        const usecase = new SaveCompanyUseCase(
            res,
            this.companyRepository,
            createCompanyDto,
            this.pppRepository              

        )

        usecase.execute()
    }

    updateIntershipHours(req: Request, res: Response){
        // const { idPPP} = req.params
        const { idPPP, intershipHours} = req.body
        const usecase = new UpdateIntershipHourUseCase(
            res,
            this.pppRepository,
            idPPP,
            intershipHours
        )

        usecase.execute()
    }

    updateRegisterLetterAceptance(req: Request, res: Response){
        const { id } = req.params
        const payload = req.body as UpdateRegisterAceptanceDto;
        const usecase = new RegisterLetterAceptanceUseCase(
            res,
            this.pppRepository,
            id,
            payload
        )
        
        usecase.execute()
    }

    updateClosePpp( req: Request, res: Response) {

        const { id } = req.params
        const payload = req.body as ClosePppDto

        const usecase = new ClosePppUsecase(
            res,
            this.pppRepository,
            id,
            payload,
            this.studentRepository
        )
        usecase.execute()
        
    }
}