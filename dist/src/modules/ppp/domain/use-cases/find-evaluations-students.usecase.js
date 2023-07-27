"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindEvaluationsStudentsUseCase = void 0;
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
class FindEvaluationsStudentsUseCase {
    constructor(response, repository, idPpp) {
        this.response = response;
        this.repository = repository;
        this.idPpp = idPpp;
    }
    async execute() {
        try {
            const evaluationsFound = await this.repository.getEvaluationsByPPP(this.idPpp);
            if (evaluationsFound.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No es hallarón evaluaciones con el PPP #${this.idPpp}.`
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: evaluationsFound
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
exports.FindEvaluationsStudentsUseCase = FindEvaluationsStudentsUseCase;
//# sourceMappingURL=find-evaluations-students.usecase.js.map