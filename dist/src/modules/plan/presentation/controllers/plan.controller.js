"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanController = void 0;
const repositories_1 = require("../../data/repositories");
const use_cases_1 = require("../../domain/use-cases");
const repositories_2 = require("../../../auth/data/repositories");
class PlanController {
    constructor() {
        this.planRepository = new repositories_1.PlanPPPRepositoryImpl();
        this.areaPlanRepository = new repositories_1.AreaPlanRepositoryImpl();
        this.questionEvaluationRepository = new repositories_1.QuestionEvaluationRepositoryImpl();
        this.planDocumentRepository = new repositories_1.PlanDocumentRepositoryImpl();
        this.typeDocumentRepository = new repositories_1.TypeDocumentRepositoryImpl();
        this.userRepository = new repositories_2.UserRepositoryImpl();
        this.getAllPlans = this.getAllPlans.bind(this);
        this.postCreatePlan = this.postCreatePlan.bind(this);
        this.postCreateAreaPlan = this.postCreateAreaPlan.bind(this);
        this.postCreateQuestionEvaluation = this.postCreateQuestionEvaluation.bind(this);
        this.postCreateDocument = this.postCreateDocument.bind(this);
        this.getTypesDocuments = this.getTypesDocuments.bind(this);
    }
    getAllPlans(req, res) {
        const usecase = new use_cases_1.FindAllUseCase(res, this.planRepository);
        usecase.exceute();
    }
    postCreatePlan(req, res) {
        const createPlanPPPDto = req.body;
        const usecase = new use_cases_1.CreatePlanPPPUseCase(res, createPlanPPPDto, this.planRepository, this.userRepository);
        usecase.execute();
    }
    postCreateAreaPlan(req, res) {
        const createAreaPlanDto = req.body;
        const usecase = new use_cases_1.CreateAreaPlanUseCase(res, createAreaPlanDto, this.areaPlanRepository, this.planRepository);
        usecase.execute();
    }
    postCreateQuestionEvaluation(req, res) {
        const createQuestionEvaluationDto = req.body;
        const usecase = new use_cases_1.CreateQuestionEvaluationUseCase(res, createQuestionEvaluationDto, this.questionEvaluationRepository, this.areaPlanRepository);
        usecase.execute();
    }
    postCreateDocument(req, res) {
        const createPlanDocumentDto = req.body;
        const usecase = new use_cases_1.CreatePlanDocumentUseCase(res, createPlanDocumentDto, this.planDocumentRepository, this.typeDocumentRepository, this.planRepository);
        usecase.execute();
    }
    getTypesDocuments(req, res) {
        const usecase = new use_cases_1.GetAllTypeDocumentsUseCase(res, this.typeDocumentRepository);
        usecase.execute();
    }
}
exports.PlanController = PlanController;
//# sourceMappingURL=plan.controller.js.map