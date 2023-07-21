"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanDocumentUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const dtos_1 = require("../dtos");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const entities_1 = require("../../data/entities");
class CreatePlanDocumentUseCase {
    constructor(reponse, createPlanDocumentDto, repository, typeRepository, planRepository) {
        this.reponse = reponse;
        this.createPlanDocumentDto = createPlanDocumentDto;
        this.repository = repository;
        this.typeRepository = typeRepository;
        this.planRepository = planRepository;
    }
    async execute() {
        const { error } = dtos_1.CreatePlanDocumentDto.schema.validate(this.createPlanDocumentDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.reponse,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const planDocumentInstanced = (0, class_transformer_1.plainToClass)(entities_1.PlanDocumentEntity, this.createPlanDocumentDto);
            const newPlanDocument = await this.repository.create(planDocumentInstanced);
            const typeFound = await this.typeRepository.findOneById(this.createPlanDocumentDto.type);
            if (!typeFound) {
                return (0, msg_response_1.message)({
                    response: this.reponse,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe el tipo con id #${this.createPlanDocumentDto.type}`
                });
            }
            const planFound = await this.planRepository.findById(this.createPlanDocumentDto.planPPP);
            if (!planFound) {
                return (0, msg_response_1.message)({
                    response: this.reponse,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe el plan con id #${this.createPlanDocumentDto.planPPP}`
                });
            }
            newPlanDocument.type = typeFound;
            newPlanDocument.planPPP = planFound;
            const documentCreated = await this.repository.save(newPlanDocument);
            (0, msg_response_1.message)({
                response: this.reponse,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Documento registrado correctamente.',
                data: documentCreated
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.reponse,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
        }
    }
}
exports.CreatePlanDocumentUseCase = CreatePlanDocumentUseCase;
//# sourceMappingURL=create-plan-documnent.usecase.js.map