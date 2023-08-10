"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindStudentUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class FindStudentUseCase {
    constructor(response, repository, pppRepository, codeStudent) {
        this.response = response;
        this.repository = repository;
        this.pppRepository = pppRepository;
        this.codeStudent = codeStudent;
    }
    async execute() {
        try {
            const studentFound = await this.repository.findOneByCode(this.codeStudent);
            if (!studentFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: `No existe estudiante con codigo #${this.codeStudent}`
                });
            }
            const pppFound = await this.pppRepository.findLastOneWithCompanyByStudent(studentFound.code);
            if (!pppFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontró un PPP para estudiando con codigo #${studentFound.code}`
                });
            }
            const { user, ...restStudent } = studentFound;
            const { student, ...restPPP } = pppFound;
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: {
                    ...restStudent,
                    ...user,
                    ppp: restPPP
                }
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
exports.FindStudentUseCase = FindStudentUseCase;
//# sourceMappingURL=find-student.usecase.js.map