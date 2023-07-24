"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBasesPPPUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class GetBasesPPPUseCase {
    constructor(response, planRepository) {
        this.response = response;
        this.planRepository = planRepository;
    }
    async execute() {
        try {
            const basesObtanined = await this.planRepository.findBases();
            if (basesObtanined.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No se encontraron bases de PPP.'
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: basesObtanined
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
exports.GetBasesPPPUseCase = GetBasesPPPUseCase;
//# sourceMappingURL=get-bases-ppp.usecase.js.map