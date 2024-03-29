"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanPPPUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const dtos_1 = require("../dtos");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../data/entities");
class CreatePlanPPPUseCase {
    constructor(response, createPlanPPPDto, repository, userRepository, typeRepository, documentRepoitory) {
        this.response = response;
        this.createPlanPPPDto = createPlanPPPDto;
        this.repository = repository;
        this.userRepository = userRepository;
        this.typeRepository = typeRepository;
        this.documentRepoitory = documentRepoitory;
        this.LIST_IS_EMPTY = 0;
    }
    async execute() {
        const { error } = dtos_1.CreatePlanPPPDto.schema.validate(this.createPlanPPPDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const planPPPInstanced = (0, class_transformer_1.plainToClass)(entities_1.PlanPPPEntity, this.createPlanPPPDto);
            const newPlanPPP = await this.repository.create(planPPPInstanced);
            const userFound = await this.userRepository.findById(this.createPlanPPPDto.commited);
            if (!userFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: `No se encontró usuario con id #${this.createPlanPPPDto.commited}`
                });
            }
            newPlanPPP.commited = userFound;
            const planPPPCreated = await this.repository.save(newPlanPPP);
            /**
             * En caso de que me manden la lista de documentos realizamos su proceso
             * de insersión.
             */
            if (this.createPlanPPPDto.documents.length !== this.LIST_IS_EMPTY) {
                Promise.all(this.createPlanPPPDto.documents.map(async (document) => {
                    const documentPrepared = (0, class_transformer_1.plainToClass)(entities_1.PlanDocumentEntity, document);
                    const documentInstanced = await this.documentRepoitory.create(documentPrepared);
                    const typeDocumentFound = await this.typeRepository.findOneById(document.type);
                    if (!typeDocumentFound) {
                        return (0, msg_response_1.message)({
                            response: this.response,
                            code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                            info: 'No existe el tipo de documento mandado!'
                        });
                    }
                    documentInstanced.type = typeDocumentFound;
                    documentInstanced.planPPP = planPPPCreated;
                    await this.documentRepoitory.save(documentInstanced);
                }));
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Plan de PPP creado correcamente',
                data: planPPPCreated
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
exports.CreatePlanPPPUseCase = CreatePlanPPPUseCase;
//# sourceMappingURL=create-plan-ppp.usecase.js.map