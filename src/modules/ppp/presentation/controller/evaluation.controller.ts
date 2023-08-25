import { Response, Request } from 'express'

import { FindEvaluationsStudentsUseCase, FindAnswersSatisfactionEvaluationsUseCase, FindDocumentsPPPUseCase, CreateEvaluationUseCase } from '../../domain/use-cases'
import { EvaluationRepository, PPPDocumentsRepository, PPPRepository, QuestionAnswerRepository } from '../../domain/repositories'
import { EvaluationRepositoryImpl, PPPDocumentsRepositoryImpl, PPPRepositoryImpl, QuestionAnswerRepositoryImpl } from '../../data/repositories'
import { CreateEvaluationDto } from '../../domain/dtos/create-evaluation';

export class EvaluationController { 

    private evaluationRepository        : EvaluationRepository
    private questionAnswerRepository    : QuestionAnswerRepository
    private PPPDocumentsRepository      : PPPDocumentsRepository
    private PPPRepository               : PPPRepository
    
    constructor() {

        this.evaluationRepository       = new EvaluationRepositoryImpl()
        this.questionAnswerRepository   = new QuestionAnswerRepositoryImpl()
        this.PPPDocumentsRepository     = new PPPDocumentsRepositoryImpl()
        this.PPPRepository              = new PPPRepositoryImpl()

        this.getEvaluationHistory       = this.getEvaluationHistory.bind( this )
        this.getResultSatisfaction      = this.getResultSatisfaction.bind( this )
        this.getDocumentsPPP            = this.getDocumentsPPP.bind( this )
        this.postCreateEvaluation       = this.postCreateEvaluation.bind( this )
        
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

    postCreateEvaluation( req: Request, res: Response){
        
        const createEvaluationDto = req.body as CreateEvaluationDto
        const usecase             = new CreateEvaluationUseCase(
            res,
            createEvaluationDto,
            this.evaluationRepository,
            this.PPPRepository
        )

        usecase.execute()
    }

}