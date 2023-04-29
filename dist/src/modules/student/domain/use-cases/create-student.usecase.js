"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentUseCase = void 0;
const entities_1 = require("../entities");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class CreateStudentUseCase {
    constructor(response, studentRepository, studentCreateEntity) {
        this.response = response;
        this.studentRepository = studentRepository;
        this.studentCreateEntity = studentCreateEntity;
    }
    async execute() {
        const { error } = entities_1.StudentCreateEntity.schema.validate(this.studentCreateEntity);
        if (error)
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: { error: error.message }
            });
        try {
            const studentCreated = await this.studentRepository.create(this.studentCreateEntity);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                data: studentCreated
            });
        }
        catch (error) {
            let info = String(error);
            if (String(error).includes('E11000'))
                info = 'Ya existe un estudiante con este codigo o dni.';
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info
            });
        }
    }
}
exports.CreateStudentUseCase = CreateStudentUseCase;
//# sourceMappingURL=create-student.usecase.js.map