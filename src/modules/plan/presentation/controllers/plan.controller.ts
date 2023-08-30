import { Request, Response } from 'express'

import { AreaPlanRepository, PlanDocumentRepository, PlanPPPRepository, QuestionEvaluationRepository, TypeDocumentRepository } from '../../domain/repositories'
import { AreaPlanRepositoryImpl, PlanDocumentRepositoryImpl, PlanPPPRepositoryImpl, QuestionEvaluationRepositoryImpl, TypeDocumentRepositoryImpl } from '../../data/repositories'
import { CreatePlanPPPUseCase, FindAllUseCase, CreateAreaPlanUseCase, CreateQuestionEvaluationUseCase, CreatePlanDocumentUseCase, GetAllTypeDocumentsUseCase } from '../../domain/use-cases'
import { CreatePlanPPPDto, CreateAreaPlanDto, CreateQuestionEvaluationDto, CreatePlanDocumentDto } from '../../domain/dtos'
import { UserRepository } from '../../../auth/domain/repositories'
import { UserRepositoryImpl } from '../../../auth/data/repositories'
import { GetBasesPPPUseCase } from '../../domain/use-cases/get-bases-ppp.usecase'

export class PlanController {

    private planRepository               : PlanPPPRepository
    private areaPlanRepository           : AreaPlanRepository
    private questionEvaluationRepository : QuestionEvaluationRepository
    private planDocumentRepository       : PlanDocumentRepository
    private typeDocumentRepository       : TypeDocumentRepository
    private userRepository               : UserRepository

    constructor() {
        
        this.planRepository               = new PlanPPPRepositoryImpl()
        this.areaPlanRepository           = new AreaPlanRepositoryImpl()
        this.questionEvaluationRepository = new QuestionEvaluationRepositoryImpl()
        this.planDocumentRepository       = new PlanDocumentRepositoryImpl()
        this.typeDocumentRepository       = new TypeDocumentRepositoryImpl()
        this.userRepository               = new UserRepositoryImpl()

        this.getAllPlans                  = this.getAllPlans.bind( this )
        this.postCreatePlan               = this.postCreatePlan.bind( this )
        this.postCreateAreaPlan           = this.postCreateAreaPlan.bind( this )
        this.postCreateQuestionEvaluation = this.postCreateQuestionEvaluation.bind( this )
        this.postCreateDocument           = this.postCreateDocument.bind( this )
        this.getTypesDocuments            = this.getTypesDocuments.bind( this )
        this.getBasesPPP                  = this.getBasesPPP.bind( this )

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
            this.planRepository,
            this.userRepository,
            this.typeDocumentRepository,
            this.planDocumentRepository
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

    postCreateDocument(req: Request, res: Response) {

        const createPlanDocumentDto = req.body as CreatePlanDocumentDto
        const usecase               = new CreatePlanDocumentUseCase(
            res,
            createPlanDocumentDto,
            this.planDocumentRepository,
            this.typeDocumentRepository,
            this.planRepository
        )

        usecase.execute()

    }

    getTypesDocuments(req: Request, res: Response) {
        
        const usecase = new GetAllTypeDocumentsUseCase(
            res,
            this.typeDocumentRepository
        )

        usecase.execute()

    }

    getBasesPPP(req: Request, res: Response) {
        
        const usecase = new GetBasesPPPUseCase(
            res,
            this.planRepository
        )

        usecase.execute()

    }

}