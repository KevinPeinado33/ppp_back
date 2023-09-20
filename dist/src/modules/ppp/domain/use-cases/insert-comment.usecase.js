"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertCommentUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const dtos_1 = require("../dtos");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const entities_1 = require("../../data/entities");
class InsertCommentUseCase {
    constructor(response, commentDto, commentRepository, idDocumentPPP, documentRepository) {
        this.response = response;
        this.commentDto = commentDto;
        this.commentRepository = commentRepository;
        this.idDocumentPPP = idDocumentPPP;
        this.documentRepository = documentRepository;
    }
    async execute() {
        const { error } = dtos_1.CreateCommentDocumentDto.schema.validate(this.commentDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error
            });
        }
        try {
            const { statusDocument } = this.commentDto;
            const documentFound = await this.documentRepository.findById(this.idDocumentPPP);
            if (!documentFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: `No existe el documento con id #${this.idDocumentPPP}`
                });
            }
            if (statusDocument) {
                documentFound.status = statusDocument;
                this.documentRepository.save(documentFound);
            }
            const commentInstansed = (0, class_transformer_1.plainToClass)(entities_1.CommentDocumentEntity, this.commentDto);
            const commentCreated = await this.commentRepository.create(commentInstansed);
            commentCreated.pppDocument = documentFound;
            this.commentRepository.save(commentCreated);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                data: commentCreated
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
        }
    }
}
exports.InsertCommentUseCase = InsertCommentUseCase;
//# sourceMappingURL=insert-comment.usecase.js.map