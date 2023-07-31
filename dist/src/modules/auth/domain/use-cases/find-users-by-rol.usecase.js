"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUsersByRolUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class FindUsersByRolUseCase {
    constructor(response, repository, rolSearch) {
        this.response = response;
        this.repository = repository;
        this.rolSearch = rolSearch;
    }
    async execute() {
        try {
            const users = await this.repository.findByRol(this.rolSearch);
            if (users.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No encontramos usuarios con rol #${this.rolSearch}`
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: users
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
exports.FindUsersByRolUseCase = FindUsersByRolUseCase;
//# sourceMappingURL=find-users-by-rol.usecase.js.map