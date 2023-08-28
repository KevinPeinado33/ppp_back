"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class EvaluationRepositoryImpl {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(entities_1.EvaluationEntity);
    }
    async findOneById(id) {
        return await this.repository.findOneBy({ id });
    }
    async create(createEvaluation) {
        return await this.repository.create(createEvaluation);
    }
    async save(evaluationCreated) {
        return await this.repository.save(evaluationCreated);
    }
    async getEvaluationsByPPP(idPPP) {
        return await this
            .repository
            .createQueryBuilder('evaluation')
            .where('evaluation.pppId = :idPPP', { idPPP })
            .getMany();
    }
}
exports.EvaluationRepositoryImpl = EvaluationRepositoryImpl;
//# sourceMappingURL=evaluation.repository.js.map