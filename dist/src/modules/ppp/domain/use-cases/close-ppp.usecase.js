"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosePppUsecase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class ClosePppUsecase {
    constructor(response) {
        this.response = response;
    }
    async execute() {
        try {
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
exports.ClosePppUsecase = ClosePppUsecase;
//# sourceMappingURL=close-ppp.usecase.js.map