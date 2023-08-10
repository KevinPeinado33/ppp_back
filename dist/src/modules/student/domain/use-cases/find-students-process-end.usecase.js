"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindStudentsProcessOrEnd = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class FindStudentsProcessOrEnd {
    constructor(response, repository, statusParams) {
        this.response = response;
        this.repository = repository;
        this.statusParams = statusParams;
        this.STUDENT_PROCESS_END = 0;
    }
    async execute() {
        try {
            /**
             * 0 = terminado
             * 1 = proceso
             */
            const students = await this.repository.findStudentsProcessEnd(this.statusParams);
            if (students.length === 0) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existé aún estudiantes en: ${(this.statusParams === this.STUDENT_PROCESS_END ? 'Terminado' : 'Proceso ')}`
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
exports.FindStudentsProcessOrEnd = FindStudentsProcessOrEnd;
//# sourceMappingURL=find-students-process-end.usecase.js.map