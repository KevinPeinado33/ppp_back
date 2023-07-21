"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllUserUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class FindAllUserUseCase {
    constructor(response, repository) {
        this.response = response;
        this.repository = repository;
    }
    async execute() {
        try {
            const users = await this.repository.findAll();
            if (users.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No existen usuarios creados aun.'
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: users
            });
            console.log(users);
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: 'Erro en el servidor.'
            });
        }
    }
}
exports.FindAllUserUseCase = FindAllUserUseCase;
//# sourceMappingURL=find-all-user.usecase.js.map