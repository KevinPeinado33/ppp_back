import { Response, Request } from 'express'

import { FindEvaluationsStudentsUseCase, FindAnswersSatisfactionEvaluationsUseCase, FindDocumentsPPPUseCase } from '../../domain/use-cases'
import { EvaluationRepository, PPPDocumentsRepository, QuestionAnswerRepository } from '../../domain/repositories'
import { EvaluationRepositoryImpl, PPPDocumentsRepositoryImpl, QuestionAnswerRepositoryImpl } from '../../data/repositories'

export class EvaluationController { 

    private evaluationRepository        : EvaluationRepository
    private questionAnswerRepository    : QuestionAnswerRepository
    private PPPDocumentsRepository      : PPPDocumentsRepository
    
    constructor() {

        this.evaluationRepository       = new EvaluationRepositoryImpl()
        this.questionAnswerRepository   = new QuestionAnswerRepositoryImpl()
        this.PPPDocumentsRepository     = new PPPDocumentsRepositoryImpl()

        this.getEvaluationHistory       = this.getEvaluationHistory.bind( this )
        this.getResultSatisfaction      = this.getResultSatisfaction.bind( this )
        this.getDocumentsPPP            = this.getDocumentsPPP.bind( this )
        
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

    getResultSatisfaction(req: Request, res: Response) {

        const { idEvaluation } = req.params

        const usecase = new FindAnswersSatisfactionEvaluationsUseCase(
            res,
            this.questionAnswerRepository,
            idEvaluation
        )

        usecase.execute()
    }

    getDocumentsPPP(req: Request, res: Response){

        const { idPPP } = req.params

        const usecase = new FindDocumentsPPPUseCase(
            res,
            this.PPPDocumentsRepository,
            idPPP
        )

        usecase.execute()
    }

}