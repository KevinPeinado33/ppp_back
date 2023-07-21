"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTypeDocumentsUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class GetAllTypeDocumentsUseCase {
    constructor(response, repository) {
        this.response = response;
        this.repository = repository;
    }
    async execute() {
        try {
            const typesDocuments = await this.repository.findAll();
            if (typesDocuments.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No existen tipos de documentos aún.'
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: typesDocuments
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
exports.GetAllTypeDocumentsUseCase = GetAllTypeDocumentsUseCase;
//# sourceMappingURL=get-all-type-documents.usecase.js.map