import {Response} from 'express'

import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { message } from "../../../../common/responses/msg.response";
import { QuestionAnswerRepository } from '../repositories';

export class FindAnswersSatisfactionEvaluationsUseCase{

    constructor(
        private readonly response       : Response,
        private readonly repository     : QuestionAnswerRepository,
        private readonly idEvaluation   : string
    ) { }

    async execute() {

        try {
            
            const answersFound = await this.repository.getAnswersByEvaluation( this.idEvaluation )

            if( answersFound.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No se encontraron respuestas con el idEvaluation #${ this.idEvaluation }.`
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: answersFound
            })

        } catch ( error ) {
            message({
                response: this.response,
                code:CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }
}