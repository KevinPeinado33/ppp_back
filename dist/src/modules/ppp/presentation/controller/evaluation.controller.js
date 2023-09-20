"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationController = void 0;
const use_cases_1 = require("../../domain/use-cases");
const repositories_1 = require("../../data/repositories");
class EvaluationController {
    constructor() {
        this.evaluationRepository = new repositories_1.EvaluationRepositoryImpl();
        this.questionAnswerRepository = new repositories_1.QuestionAnswerRepositoryImpl();
        this.PPPDocumentsRepository = new repositories_1.PPPDocumentsRepositoryImpl();
        this.PPPRepository = new repositories_1.PPPRepositoryImpl();
        this.getEvaluationHistory = this.getEvaluationHistory.bind(this);
        this.getResultSatisfaction = this.getResultSatisfaction.bind(this);
        this.getDocumentsPPP = this.getDocumentsPPP.bind(this);
        this.postCreateEvaluation = this.postCreateEvaluation.bind(this);
        this.postCreateQuestionAnswer = this.postCreateQuestionAnswer.bind(this);
    }
    getEvaluationHistory(req, res) {
        const { idPPP } = req.params;
        const usecase = new use_cases_1.FindEvaluationsStudentsUseCase(res, this.evaluationRepository, idPPP);
        usecase.execute();
    }
    getResultSatisfaction(req, res) {
        const { idEvaluation } = req.params;
        const usecase = new use_cases_1.FindAnswersSatisfactionEvaluationsUseCase(res, this.questionAnswerRepository, idEvaluation);
        usecase.execute();
    }
    getDocumentsPPP(req, res) {
        const { idPPP } = req.params;
        const usecase = new use_cases_1.FindDocumentsPPPUseCase(res, this.PPPDocumentsRepository, idPPP);
        usecase.execute();
    }
    postCreateEvaluation(req, res) {
        const createEvaluationDto = req.body;
        const usecase = new use_cases_1.CreateEvaluationUseCase(res, createEvaluationDto, this.evaluationRepository, this.PPPRepository);
        usecase.execute();
    }
    postCreateQuestionAnswer(req, res) {
        const createQuestionAnswerDto = req.body;
        const usecase = new use_cases_1.CreateQuestionAnswerUseCase(res, createQuestionAnswerDto, this.questionAnswerRepository, this.evaluationRepository);
        usecase.execute();
    }
}
exports.EvaluationController = EvaluationController;
//# sourceMappingURL=evaluation.controller.js.map