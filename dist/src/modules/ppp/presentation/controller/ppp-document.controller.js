"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPPDocumentController = void 0;
const repositories_1 = require("../../data/repositories");
const use_cases_1 = require("../../domain/use-cases");
class PPPDocumentController {
    constructor() {
        this.PPPDocumentRepository = new repositories_1.PPPDocumentsRepositoryImpl();
        this.PPPRepository = new repositories_1.PPPRepositoryImpl();
        this.commentDocumentRepository = new repositories_1.CommentDocumentRepositoryImpl();
        this.postCreatePPPDocument = this.postCreatePPPDocument.bind(this);
        this.postInsertCommentDocument = this.postInsertCommentDocument.bind(this);
    }
    postCreatePPPDocument(req, res) {
        const createPPPDocumentDto = req.body;
        const usecase = new use_cases_1.CreatePPPDocumentUseCase(res, createPPPDocumentDto, this.PPPDocumentRepository, this.PPPRepository);
        usecase.execute();
    }
    postInsertCommentDocument(req, res) {
        const { idDocumentPPP } = req.params;
        const payload = req.body;
        const usecase = new use_cases_1.InsertCommentUseCase(res, payload, this.commentDocumentRepository, idDocumentPPP, this.PPPDocumentRepository);
        usecase.execute();
    }
}
exports.PPPDocumentController = PPPDocumentController;
//# sourceMappingURL=ppp-document.controller.js.map