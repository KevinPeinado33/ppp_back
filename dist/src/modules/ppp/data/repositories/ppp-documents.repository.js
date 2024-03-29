"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPPDocumentsRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class PPPDocumentsRepositoryImpl {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(entities_1.PPPDocumentsEntity);
    }
    async deleteById(id) {
        this.repository.delete(id);
    }
    async getDocumentsByPPP(idPPP) {
        return await this
            .repository
            .createQueryBuilder('document')
            .where('document.pppId = :idPPP', { idPPP })
            .getMany();
    }
    async create(newDocument) {
        return await this.repository.create(newDocument);
    }
    save(documentCreated) {
        return this.repository.save(documentCreated);
    }
    findById(id) {
        return this.repository.findOneBy({ id });
    }
}
exports.PPPDocumentsRepositoryImpl = PPPDocumentsRepositoryImpl;
//# sourceMappingURL=ppp-documents.repository.js.map