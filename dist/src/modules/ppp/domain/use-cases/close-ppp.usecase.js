"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClosePppUsecase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const close_ppp_1 = require("../dtos/close-ppp");
class ClosePppUsecase {
    constructor(response, repository, idPpp, closePppDto, studenRepository) {
        this.response = response;
        this.repository = repository;
        this.idPpp = idPpp;
        this.closePppDto = closePppDto;
        this.studenRepository = studenRepository;
        this.MAX_HOURS_PPP = 700;
    }
    async execute() {
        const { error } = close_ppp_1.ClosePppDto.schema.validate(this.closePppDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            let notasAcum = 0;
            let hoursAcum = 0;
            const pppFound = await this.repository.findOnebyId(this.idPpp);
            if (!pppFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No se encontró el ppp con id #${this.idPpp}`
                });
            }
            const ratedAndHoursFound = await this.studenRepository.getRatesAndIntershipHoursById(this.closePppDto.studentID);
            /**
             * Si tiene otros ppps el estudiante me va a traer todas las notas y horas acumuladas
             */
            if (ratedAndHoursFound) {
                for (const x of ratedAndHoursFound) {
                    notasAcum = notasAcum + Number(x.get("rate"));
                    hoursAcum = hoursAcum + Number(x.get("hours"));
                }
                notasAcum = notasAcum + this.closePppDto.rate;
                hoursAcum = hoursAcum + this.closePppDto.intershipHours;
                notasAcum = notasAcum / ratedAndHoursFound.length;
                console.log({ lennn: ratedAndHoursFound });
                pppFound.intershipHours = hoursAcum;
            }
            else {
                pppFound.intershipHours = this.closePppDto.intershipHours;
            }
            const isHoursCompleted = pppFound.intershipHours >= this.MAX_HOURS_PPP;
            pppFound.rate = this.closePppDto.rate;
            pppFound.status = !isHoursCompleted;
            this.repository.save(pppFound);
            if (isHoursCompleted) {
                const studentFound = await this.studenRepository.findOneByCode(this.closePppDto.studentID);
                if (!studentFound)
                    return;
                studentFound.finalRate = notasAcum;
                studentFound.intershipHours = hoursAcum;
                this.studenRepository.save(studentFound);
            }
            console.log({ notasAcum });
            console.log({ hoursAcum });
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: 'Acabas de cerrar tu ppp',
                data: pppFound
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