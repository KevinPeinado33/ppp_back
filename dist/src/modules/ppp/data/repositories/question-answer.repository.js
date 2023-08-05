"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionAnswerRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class QuestionAnswerRepositoryImpl {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(entities_1.QuestionAnswerEntity);
    }
    async getAnswersByEvaluation(idEvaluation) {
        return await this
            .repository
            .createQueryBuilder('answer')
            .where('answer.evaluationsId = :idEvaluation', { idEvaluation })
            .getMany();
    }
}
exports.QuestionAnswerRepositoryImpl = QuestionAnswerRepositoryImpl;
//# sourceMappingURL=question-answer.repository.js.map