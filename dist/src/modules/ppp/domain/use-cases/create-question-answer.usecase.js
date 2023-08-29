"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionAnswerUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
const dtos_1 = require("../dtos");
const entities_1 = require("../../data/entities");
class CreateQuestionAnswerUseCase {
    constructor(response, createQuestionAnswerDto, repository, evaluationRepository) {
        this.response = response;
        this.createQuestionAnswerDto = createQuestionAnswerDto;
        this.repository = repository;
        this.evaluationRepository = evaluationRepository;
    }
    async execute() {
        const { error } = dtos_1.CreateQuestionAnswerDto.schema.validate(this.createQuestionAnswerDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const questionAnswerInstanced = (0, class_transformer_1.plainToClass)(entities_1.QuestionAnswerEntity, this.createQuestionAnswerDto);
            const newQuestionAnswer = await this.repository.create(questionAnswerInstanced);
            const evaluationFound = await this.evaluationRepository.findOneById(this.createQuestionAnswerDto.evaluations);
            if (!evaluationFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe la evaluación con id #${this.createQuestionAnswerDto.evaluations}`
                });
            }
            newQuestionAnswer.evaluations = evaluationFound;
            const questionAnswerCreated = await this.repository.save(newQuestionAnswer);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'QuestionAnswer creado correctamente',
                data: questionAnswerCreated
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
exports.CreateQuestionAnswerUseCase = CreateQuestionAnswerUseCase;
//# sourceMappingURL=create-question-answer.usecase.js.map