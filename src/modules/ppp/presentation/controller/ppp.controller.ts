import { Response, Request } from "express"
import { EvaluationRepositoryImpl, PPPRepositoryImpl } from "../../data/repositories"
import { EvaluationRepository, PPPRepository } from "../../domain/repositories"
import { AssingAdvisorPppUseCase } from "../../domain/use-cases/assing-advisor-ppp.usecases"
import { UserRepositoryImpl } from "../../../auth/data/repositories"
import { UserRepository } from "../../../auth/domain/repositories"

export class PPPController{

  private pppRepository   : PPPRepository
  private userRepository  : UserRepository

  constructor() {

     this.pppRepository = new PPPRepositoryImpl(),
     this.userRepository = new UserRepositoryImpl(),

        this.updateAssingAdvisor = this.updateAssingAdvisor.bind( this )

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

}