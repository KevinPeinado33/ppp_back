"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssingAdvisorPppUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class AssingAdvisorPppUseCase {
    constructor(response, repository, pppID, advisorID, userRepository) {
        this.response = response;
        this.repository = repository;
        this.pppID = pppID;
        this.advisorID = advisorID;
        this.userRepository = userRepository;
    }
    async execute() {
        try {
            const ppp = await this.repository.findOnebyId(this.pppID);
            if (!ppp) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontro PPP con id #${this.pppID}.`,
                });
            }
            const userFound = await this.userRepository.findById(this.advisorID);
            if (!userFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: `No se encontró usuario con id #${this.advisorID}`,
                });
            }
            ppp.advisor = userFound;
            this.repository.save(ppp);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: `Se asignó correctamente al sup. ${userFound.firstName}.`,
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error,
            });
        }
    }
}
exports.AssingAdvisorPppUseCase = AssingAdvisorPppUseCase;
//# sourceMappingURL=assing-advisor-ppp.usecases.js.map