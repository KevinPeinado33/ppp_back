"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDocumentPPPUsecas = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class DeleteDocumentPPPUsecas {
    constructor(response, pppDocumentsRepository, idPPPDocument) {
        this.response = response;
        this.pppDocumentsRepository = pppDocumentsRepository;
        this.idPPPDocument = idPPPDocument;
    }
    async execute() {
        try {
            const pppDocumentFound = await this.pppDocumentsRepository.findById(this.idPPPDocument);
            if (!pppDocumentFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                    info: 'Documento no encontrado'
                });
            }
            await this.pppDocumentsRepository.deleteById(pppDocumentFound.id);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: 'Eliminado correctamente!'
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
exports.DeleteDocumentPPPUsecas = DeleteDocumentPPPUsecas;
//# sourceMappingURL=delete-document-ppp.usecase.js.map