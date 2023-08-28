"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEvaluationUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const entities_1 = require("../../data/entities");
const dtos_1 = require("../dtos");
class CreateEvaluationUseCase {
    constructor(response, createEvaluationDto, repository, pppRepository) {
        this.response = response;
        this.createEvaluationDto = createEvaluationDto;
        this.repository = repository;
        this.pppRepository = pppRepository;
    }
    async execute() {
        const { error } = dtos_1.CreateEvaluationDto.schema.validate(this.createEvaluationDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const evaluationInstanced = (0, class_transformer_1.plainToClass)(entities_1.EvaluationEntity, this.createEvaluationDto);
            const newEvaluation = await this.repository.create(evaluationInstanced);
            const pppFound = await this.pppRepository.findOnebyId(this.createEvaluationDto.ppp);
            if (!pppFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe el ppp con id #${this.createEvaluationDto.ppp}`
                });
            }
            newEvaluation.ppp = pppFound;
            const evaluationCreated = await this.repository.save(newEvaluation);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Evaluación creada correctamente.',
                data: evaluationCreated
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
exports.CreateEvaluationUseCase = CreateEvaluationUseCase;
//# sourceMappingURL=create-evaluation.usecase.js.map