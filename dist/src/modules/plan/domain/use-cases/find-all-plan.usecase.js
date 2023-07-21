"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class FindAllUseCase {
    constructor(response, respository) {
        this.response = response;
        this.respository = respository;
    }
    async exceute() {
        try {
            const plans = await this.respository.findAll();
            if (plans.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No existen planes de practicas pre profesionales aún.'
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: plans
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: 'Error en el servidor.'
            });
        }
    }
}
exports.FindAllUseCase = FindAllUseCase;
//# sourceMappingURL=find-all-plan.usecase.js.map