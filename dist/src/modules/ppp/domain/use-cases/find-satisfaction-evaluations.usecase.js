"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAnswersSatisfactionEvaluationsUseCase = void 0;
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
class FindAnswersSatisfactionEvaluationsUseCase {
    constructor(response, repository, idEvaluation) {
        this.response = response;
        this.repository = repository;
        this.idEvaluation = idEvaluation;
    }
    async execute() {
        try {
            const answersFound = await this.repository.getAnswersByEvaluation(this.idEvaluation);
            if (answersFound.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontraron respuestas con el idEvaluation #${this.idEvaluation}.`
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: answersFound
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
exports.FindAnswersSatisfactionEvaluationsUseCase = FindAnswersSatisfactionEvaluationsUseCase;
//# sourceMappingURL=find-satisfaction-evaluations.usecase.js.map