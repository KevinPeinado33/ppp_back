"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterLetterAceptanceUseCase = void 0;
const update_register_aceptance_1 = require("../dtos/update-register-aceptance");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class RegisterLetterAceptanceUseCase {
    constructor(response, repository, idPpp, registerLetterAceptanceDto) {
        this.response = response;
        this.repository = repository;
        this.idPpp = idPpp;
        this.registerLetterAceptanceDto = registerLetterAceptanceDto;
    }
    async execute() {
        const { error } = update_register_aceptance_1.UpdateRegisterAceptanceDto.schema.validate(this.registerLetterAceptanceDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const foundRegister = await this.repository.findOnebyId(this.idPpp);
            if (!foundRegister) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontro ninguna carta`
                });
            }
            // actulizar campos pe crrano
            foundRegister.area = this.registerLetterAceptanceDto.area;
            foundRegister.startedDate = this.registerLetterAceptanceDto.startedDate;
            foundRegister.finishedDate = this.registerLetterAceptanceDto.finishedDate;
            console.log({ foundRegister });
            this.repository.save(foundRegister);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: `Se registro con exito la carta`
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
exports.RegisterLetterAceptanceUseCase = RegisterLetterAceptanceUseCase;
//# sourceMappingURL=register-letter-aceptance.usecase.js.map