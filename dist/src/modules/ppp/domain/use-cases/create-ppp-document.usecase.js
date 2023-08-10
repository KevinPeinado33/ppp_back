"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePPPDocumentUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
const dtos_1 = require("../dtos");
const entities_1 = require("../../data/entities");
class CreatePPPDocumentUseCase {
    constructor(response, createPPPDocumentDto, repository, pppRepository) {
        this.response = response;
        this.createPPPDocumentDto = createPPPDocumentDto;
        this.repository = repository;
        this.pppRepository = pppRepository;
    }
    async execute() {
        const { error } = dtos_1.CreatePPPDocumentDto.schema.validate(this.createPPPDocumentDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const pppDocumentInstanced = (0, class_transformer_1.plainToClass)(entities_1.PPPDocumentsEntity, this.createPPPDocumentDto);
            const newPPPDocument = await this.repository.create(pppDocumentInstanced);
            const pppFound = await this.pppRepository.findOnebyId(this.createPPPDocumentDto.ppp);
            if (!pppFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe el ppp con id #${this.createPPPDocumentDto.ppp}`
                });
            }
            newPPPDocument.ppp = pppFound;
            const documentCreated = await this.repository.save(newPPPDocument);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Documento registrado correctamente.',
                data: documentCreated
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
exports.CreatePPPDocumentUseCase = CreatePPPDocumentUseCase;
//# sourceMappingURL=create-ppp-document.usecase.js.map