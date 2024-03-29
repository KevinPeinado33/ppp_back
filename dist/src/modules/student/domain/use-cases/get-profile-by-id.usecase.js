"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfileByIdUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class GetProfileByIdUseCase {
    constructor(response, repository, userRepository, pppRepository, idUser) {
        this.response = response;
        this.repository = repository;
        this.userRepository = userRepository;
        this.pppRepository = pppRepository;
        this.idUser = idUser;
    }
    async execute() {
        try {
            const codeStudent = await this.repository.findCodeStudenById(this.idUser);
            const studentFound = await this.repository.findOneByCode(codeStudent.student_code);
            if (!studentFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: `No existe estudiante con codigo #${codeStudent}`
                });
            }
            const { user, ...restStudent } = studentFound;
            const pppFound = await this.pppRepository.findLastOneWithCompanyByStudent(studentFound.code);
            if (!pppFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.OK,
                    data: {
                        ...restStudent,
                        ...user,
                        ppp: null
                    }
                });
            }
            const advisorPPP = await this.userRepository.findByIdPPP(pppFound.id);
            const { student, ...restPPP } = pppFound;
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: {
                    ...restStudent,
                    ...user,
                    ppp: { ...restPPP, advisor: { ...advisorPPP } }
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
exports.GetProfileByIdUseCase = GetProfileByIdUseCase;
//# sourceMappingURL=get-profile-by-id.usecase.js.map