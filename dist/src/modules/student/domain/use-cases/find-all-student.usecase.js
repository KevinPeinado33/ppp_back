"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllStudentUseCase = void 0;
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const msg_response_1 = require("../../../../common/responses/msg.response");
class FindAllStudentUseCase {
    constructor(response, repository, planPPPId) {
        this.response = response;
        this.repository = repository;
        this.planPPPId = planPPPId;
    }
    async execute() {
        try {
            const students = await this.repository.getAllStudents(this.planPPPId);
            if (students.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No existen estudiantes aún.'
                });
            }
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: students
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
exports.FindAllStudentUseCase = FindAllStudentUseCase;
//# sourceMappingURL=find-all-student.usecase.js.map