"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TakeEvaluationUseCase = void 0;
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
const dtos_1 = require("../dtos");
class TakeEvaluationUseCase {
    constructor(response, takeEvaluationDto, evaluationRepository, questionAnswerRepository, idEvaluation) {
        this.response = response;
        this.takeEvaluationDto = takeEvaluationDto;
        this.evaluationRepository = evaluationRepository;
        this.questionAnswerRepository = questionAnswerRepository;
        this.idEvaluation = idEvaluation;
    }
    async execute() {
        const { error } = dtos_1.TakeEvaluationDto.schema.validate(this.takeEvaluationDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const evaluationFound = await this.evaluationRepository.findOneById(this.idEvaluation);
            if (!evaluationFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe el evaluación con el id #${this.idEvaluation}`
                });
            }
            // Campos a actualizar
            evaluationFound.score = this.takeEvaluationDto.score,
                evaluationFound.observationBusinessMentor = this.takeEvaluationDto.observationBusinessMentor,
                evaluationFound.observationAdvisor = this.takeEvaluationDto.observationAdvisor;
            evaluationFound.numberAttempts = this.takeEvaluationDto.numberAttempts;
            await this.evaluationRepository.save(evaluationFound);
            Promise.all(this.takeEvaluationDto.answers.map(async (answer) => {
                const questionAnswer = await this.questionAnswerRepository.findOneById(answer.id);
                if (!questionAnswer) {
                    return (0, msg_response_1.message)({
                        response: this.response,
                        code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                        info: 'No hay respuestas en esta evaluación'
                    });
                }
                questionAnswer.answer = answer.answer;
                questionAnswer.puntuation = answer.puntuation;
                await this.questionAnswerRepository.save(questionAnswer);
            }));
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Cambios realizados correctamente',
                data: evaluationFound
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
exports.TakeEvaluationUseCase = TakeEvaluationUseCase;
//# sourceMappingURL=take-evaluation.usecase.js.map