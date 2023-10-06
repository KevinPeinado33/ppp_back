"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDocumentRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../../data/entities");
class CommentDocumentRepositoryImpl {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(entities_1.CommentDocumentEntity);
    }
    async create(payload) {
        return this.repository.create(payload);
    }
    async save(payload) {
        return this.repository.save(payload);
    }
}
exports.CommentDocumentRepositoryImpl = CommentDocumentRepositoryImpl;
//# sourceMappingURL=comment-document.repository.js.map