"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloseEvaluationUsecase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class CloseEvaluationUsecase {
    constructor(response, evaluationRepository, idPpp) {
        this.response = response;
        this.evaluationRepository = evaluationRepository;
        this.idPpp = idPpp;
    }
    async execute() {
        try {
            const evaluationsFound = await this.evaluationRepository.getEvaluationsByPPP(this.idPpp);
            if (!evaluationsFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe evaluaciones con id #${this.idPpp}.`
                });
            }
            Promise.all(evaluationsFound.map(async (evaluation) => {
                const currentDate = new Date();
                if (evaluation.createdAt) {
                }
            }));
        }
        catch (error) {
        }
    }
}
exports.CloseEvaluationUsecase = CloseEvaluationUsecase;
//# sourceMappingURL=close-evaluation.usecase.js.map