"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionEvaluationUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const dtos_1 = require("../dtos");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const entities_1 = require("../../data/entities");
class CreateQuestionEvaluationUseCase {
    constructor(response, createQuestionDto, repository, areaPlanRepository) {
        this.response = response;
        this.createQuestionDto = createQuestionDto;
        this.repository = repository;
        this.areaPlanRepository = areaPlanRepository;
    }
    async execute() {
        const { error } = dtos_1.CreateQuestionEvaluationDto.schema.validate(this.createQuestionDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const questionEvaluationInstanced = (0, class_transformer_1.plainToClass)(entities_1.QuestionEvaluationEntity, this.createQuestionDto);
            const newQuestionEvaluation = await this.repository.create(questionEvaluationInstanced);
            const areaPlanFound = await this.areaPlanRepository.findById(this.createQuestionDto.area);
            if (!areaPlanFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe un area con id #${this.createQuestionDto.area}`
                });
            }
            newQuestionEvaluation.area = areaPlanFound;
            const questionEvaluationCreated = await this.repository.save(newQuestionEvaluation);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                data: questionEvaluationCreated
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
exports.CreateQuestionEvaluationUseCase = CreateQuestionEvaluationUseCase;
//# sourceMappingURL=create-question-evaluation.usecase.js.map