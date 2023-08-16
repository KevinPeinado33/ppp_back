"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindDocumentsPPPUseCase = void 0;
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
class FindDocumentsPPPUseCase {
    constructor(response, repository, idPPP) {
        this.response = response;
        this.repository = repository;
        this.idPPP = idPPP;
    }
    async execute() {
        try {
            const documentsFound = await this.repository.getDocumentsByPPP(this.idPPP);
            if (documentsFound.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontraron documentos con el PPP #${this.idPPP}.`
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: documentsFound
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
exports.FindDocumentsPPPUseCase = FindDocumentsPPPUseCase;
//# sourceMappingURL=find-documents-ppp.usecase.js.map