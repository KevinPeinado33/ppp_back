"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanDocumentRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class PlanDocumentRepositoryImpl {
    constructor() {
        this.planDocumentRepository = database_1.AppDataSource.getRepository(entities_1.PlanDocumentEntity);
    }
    async create(newDocument) {
        return await this.planDocumentRepository.create(newDocument);
    }
    async save(documentCreated) {
        return await this.planDocumentRepository.save(documentCreated);
    }
}
exports.PlanDocumentRepositoryImpl = PlanDocumentRepositoryImpl;
//# sourceMappingURL=plan-document.repository.js.map