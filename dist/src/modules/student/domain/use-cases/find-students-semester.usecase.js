"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindStudentsSemesterUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class FindStudentsSemesterUseCase {
    constructor(response, repository, cycle) {
        this.response = response;
        this.repository = repository;
        this.cycle = cycle;
    }
    async execute() {
        try {
            const students = await this.repository.findStudentsSemester(this.cycle);
            if (students.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No hay estudiantes en este semestre'
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
exports.FindStudentsSemesterUseCase = FindStudentsSemesterUseCase;
//# sourceMappingURL=find-students-semester.usecase.js.map