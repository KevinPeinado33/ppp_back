"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionEvaluationRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class QuestionEvaluationRepositoryImpl {
    constructor() {
        this.questionRepository = database_1.AppDataSource.getRepository(entities_1.QuestionEvaluationEntity);
    }
    async create(newQuestion) {
        return await this.questionRepository.create(newQuestion);
    }
    async save(questionCreated) {
        return await this.questionRepository.create(questionCreated);
    }
    async findAllById(id) {
        return await this.questionRepository.findBy({ id });
    }
}
exports.QuestionEvaluationRepositoryImpl = QuestionEvaluationRepositoryImpl;
//# sourceMappingURL=question-evaluation.repository.js.map