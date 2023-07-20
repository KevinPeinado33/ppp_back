import { Request, Response } from 'express'

import { AreaPlanRepository, PlanPPPRepository, QuestionEvaluationRepository } from '../../domain/repositories'
import { AreaPlanRepositoryImpl, PlanPPPRepositoryImpl, QuestionEvaluationRepositoryImpl } from '../../data/repositories'
import { CreatePlanPPPUseCase, FindAllUseCase, CreateAreaPlanUseCase, CreateQuestionEvaluationUseCase } from '../../domain/use-cases'
import { CreatePlanPPPDto, CreateAreaPlanDto, CreateQuestionEvaluationDto } from '../../domain/dtos'

export class PlanController {

    private planRepository               : PlanPPPRepository
    private areaPlanRepository           : AreaPlanRepository
    private questionEvaluationRepository : QuestionEvaluationRepository

    constructor() {
        
        this.planRepository               = new PlanPPPRepositoryImpl()
        this.areaPlanRepository           = new AreaPlanRepositoryImpl()
        this.questionEvaluationRepository = new QuestionEvaluationRepositoryImpl()

        this.getAllPlans                  = this.getAllPlans.bind( this )
        this.postCreatePlan               = this.postCreatePlan.bind( this )
        this.postCreateAreaPlan           = this.postCreateAreaPlan.bind( this )
        this.postCreateQuestionEvaluation = this.postCreateQuestionEvaluation.bind( this )

    }

    getAllPlans(req: Request, res: Response) {

        const usecase = new FindAllUseCase(
            res,
            this.planRepository
        )

        usecase.exceute()

    }

    postCreatePlan(req: Request, res: Response) {

        const createPlanPPPDto = req.body as CreatePlanPPPDto
        const usecase          = new CreatePlanPPPUseCase(
            res,
            createPlanPPPDto,
            this.planRepository
        )

        usecase.execute()

    }

    postCreateAreaPlan(req: Request, res: Response) {

        const createAreaPlanDto = req.body as CreateAreaPlanDto
        const usecase           = new CreateAreaPlanUseCase(
            res,
            createAreaPlanDto,
            this.areaPlanRepository,
            this.planRepository
        )

        usecase.execute()

    }

    postCreateQuestionEvaluation(req: Request, res: Response) {
        
        const createQuestionEvaluationDto = req.body as CreateQuestionEvaluationDto
        const usecase                     = new CreateQuestionEvaluationUseCase(
            res,
            createQuestionEvaluationDto,
            this.questionEvaluationRepository,
            this.areaPlanRepository
        )

        usecase.execute()

    }

}