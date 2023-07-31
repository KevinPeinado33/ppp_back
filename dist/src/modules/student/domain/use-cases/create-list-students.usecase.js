"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListStudentsUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const entities_1 = require("../../data/entities");
// Persona persona = new Persona('kevin','22')
class CreateListStudentsUseCase {
    constructor(response, repository, students) {
        this.response = response;
        this.repository = repository;
        this.students = students;
    }
    execute() {
        try {
            const savePromise = this.students.map(x => {
                const studentInstanced = (0, class_transformer_1.plainToClass)(entities_1.StudentEntity, x);
                return this.repository.save(studentInstanced);
            });
            Promise.all(savePromise);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Estudiantes registrados correctamente!'
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
exports.CreateListStudentsUseCase = CreateListStudentsUseCase;
//# sourceMappingURL=create-list-students.usecase.js.map