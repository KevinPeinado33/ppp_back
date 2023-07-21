"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDocumentRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class TypeDocumentRepositoryImpl {
    constructor() {
        this.typeDocumentRepository = database_1.AppDataSource.getRepository(entities_1.TypeDocumentEntity);
    }
    async findOneById(id) {
        return await this.typeDocumentRepository.findOneBy({ id });
    }
    async findAll() {
        return await this.typeDocumentRepository.find();
    }
}
exports.TypeDocumentRepositoryImpl = TypeDocumentRepositoryImpl;
//# sourceMappingURL=type-document.repository.js.map