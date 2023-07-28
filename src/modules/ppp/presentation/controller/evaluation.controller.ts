import { Response, Request } from 'express'

import { FindEvaluationsStudentsUseCase } from '../../domain/use-cases'
import { EvaluationRepository } from '../../domain/repositories'
import { EvaluationRepositoryImpl } from '../../data/repositories'

export class EvaluationController { 

    private evaluationRepository : EvaluationRepository
    
    constructor() {

        this.evaluationRepository = new EvaluationRepositoryImpl()


        this.getEvaluationHistory = this.getEvaluationHistory.bind( this )

    }

    getEvaluationHistory(req: Request, res: Response) {

        const { idPPP } = req.params

        const usecase = new FindEvaluationsStudentsUseCase(
            res,
            this.evaluationRepository,
            idPPP
        )

        usecase.execute()

    }
    

}