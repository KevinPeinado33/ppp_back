import { Response } from 'express'

import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { message } from '../../../../common/responses/msg.response'
import { EvaluationRepository } from '../repositories'

export class FindEvaluationsStudentsUseCase {
    
    constructor(
        private readonly response   : Response,
        private readonly repository : EvaluationRepository,
        private readonly idPpp      : string
    ) { }

    async execute() {

        try {

            const evaluationsFound = await this.repository.getEvaluationsByPPP( this.idPpp )

            if ( evaluationsFound.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No se encontraron evaluaciones con el PPP #${ this.idPpp }.`
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: evaluationsFound
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
        
    }

}