"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIntershipHourUseCase = void 0;
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
class UpdateIntershipHourUseCase {
    constructor(response, repository, pppId, intershipHours) {
        this.response = response;
        this.repository = repository;
        this.pppId = pppId;
        this.intershipHours = intershipHours;
    }
    async execute() {
        try {
            const ppp = await this.repository.findOnebyId(this.pppId);
            if (!ppp) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontro PPP con id #${this.pppId}.`,
                });
            }
            ppp.intershipHours = this.intershipHours;
            this.repository.save(ppp);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: `Horas de prácticas actualizadas correctamente en PPP #${this.pppId}.`,
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error,
            });
        }
    }
}
exports.UpdateIntershipHourUseCase = UpdateIntershipHourUseCase;
//# sourceMappingURL=update-intership-hour.usecase.js.map