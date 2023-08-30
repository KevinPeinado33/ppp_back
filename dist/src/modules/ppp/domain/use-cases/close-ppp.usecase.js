"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosePppUsecase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const close_ppp_1 = require("../dtos/close-ppp");
class ClosePppUsecase {
    constructor(response, repository, idPpp, closePppDto) {
        this.response = response;
        this.repository = repository;
        this.idPpp = idPpp;
        this.closePppDto = closePppDto;
    }
    async execute() {
        const { error } = close_ppp_1.ClosePppDto.schema.validate(this.closePppDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message,
            });
        }
        try {
            const foundClose = await this.repository.findOnebyId(this.idPpp);
            if (!foundClose) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se puedo cerrar su PPP`
                });
            }
            foundClose.intershipHours = this.closePppDto.intershipHours;
            foundClose.rate = this.closePppDto.rate;
            foundClose.status = this.closePppDto.status;
            this.repository.save(foundClose);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: `Se cerro con exito su PPP`
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
exports.ClosePppUsecase = ClosePppUsecase;
//# sourceMappingURL=close-ppp.usecase.js.map