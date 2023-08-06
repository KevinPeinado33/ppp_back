import { Response, Request } from "express"
import { CompanyRepositoryImpl, EvaluationRepositoryImpl, PPPRepositoryImpl } from "../../data/repositories"
import { CompanyRepositroy, EvaluationRepository, PPPRepository } from "../../domain/repositories"
import { AssingAdvisorPppUseCase } from "../../domain/use-cases/assing-advisor-ppp.usecases"
import { UserRepositoryImpl } from "../../../auth/data/repositories"
import { UserRepository } from "../../../auth/domain/repositories"
import { CreateCompanyPPPDto } from "../../domain/dtos/create-ppp-company"
import { SaveCompanyUseCase } from "../../domain/use-cases"

export class PPPController{

  private pppRepository   : PPPRepository
  private userRepository  : UserRepository
  private companyRepository: CompanyRepositroy

  constructor() {

     this.pppRepository = new PPPRepositoryImpl(),
     this.userRepository = new UserRepositoryImpl(),
     this.companyRepository = new CompanyRepositoryImpl()

        
        this.updateAssingAdvisor = this.updateAssingAdvisor.bind( this )
        this.postcompanyPPP = this.postcompanyPPP.bind(this)


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

}