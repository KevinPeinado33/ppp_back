"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAreaByPlanUsecas = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class GetAreaByPlanUsecas {
    constructor(response, areaPlanRepository, idPlan) {
        this.response = response;
        this.areaPlanRepository = areaPlanRepository;
        this.idPlan = idPlan;
    }
    async execute() {
        try {
            const areasFound = await this.areaPlanRepository.findAll(this.idPlan);
            if (areasFound.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No encontramos areas con plan id #${this.idPlan}`
                });
            }
            console.log({ areasFound });
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: areasFound
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: 'Error con el servidor.'
            });
            console.log({ error });
        }
    }
}
exports.GetAreaByPlanUsecas = GetAreaByPlanUsecas;
//# sourceMappingURL=get-area-by-plan.usecase.js.map