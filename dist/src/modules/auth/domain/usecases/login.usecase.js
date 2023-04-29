"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class LoginUseCase {
    constructor(response, loginDto, repository) {
        this.response = response;
        this.loginDto = loginDto;
        this.repository = repository;
    }
    async execute() {
        const userFound = await this.repository.findUserByEmail(this.loginDto.email);
        if (!userFound)
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                info: 'No se encontró el usuario.'
            });
        delete userFound.password;
        (0, msg_response_1.message)({
            response: this.response,
            code: 201,
            data: {
                ...userFound,
                token: 'ESTO ES UN TOKEN PE'
            }
        });
    }
}
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=login.usecase.js.map