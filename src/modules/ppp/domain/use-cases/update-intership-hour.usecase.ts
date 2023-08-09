import { Response } from "express";

import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { message } from "../../../../common/responses/msg.response";
import { PPPRepository } from "../repositories";

export class UpdateIntershipHourUseCase{

    constructor(
        private readonly response           : Response,
        private readonly repository         : PPPRepository,
        private readonly pppId              : string,
        private readonly intershipHours     : number

    ) {}

    async execute() {

        try {
            const ppp = await this.repository.findOnebyId(this.pppId);

            if(!ppp){
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No se encontro PPP con id #${this.pppId}.`,
                });
            }

            ppp.intershipHours = this.intershipHours;

            this.repository.save(ppp)

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                info: `Horas de prácticas actualizadas correctamente en PPP #${this.pppId}.`,
            });

        } catch (error) {

            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error,
            });
        }
    }
}