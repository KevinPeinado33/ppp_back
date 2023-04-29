"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllStudentUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class GetAllStudentUseCase {
    constructor(response, studentRepository) {
        this.response = response;
        this.studentRepository = studentRepository;
    }
    async execute() {
        try {
            const students = await this.studentRepository.find();
            if (!students)
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: 'No hay estudiantes aún.'
                });
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
                info: String(error)
            });
        }
    }
}
exports.GetAllStudentUseCase = GetAllStudentUseCase;
//# sourceMappingURL=get-all-student.usecase.js.map