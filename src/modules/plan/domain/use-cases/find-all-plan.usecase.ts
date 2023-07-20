import { Response } from 'express'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { PlanPPPRepository } from '../repositories'

export class FindAllUseCase {

    constructor(
        private readonly response: Response,
        private readonly respository: PlanPPPRepository
    ) { }

    async exceute() {
        
        try {

            const plans = await this.respository.findAll()

            if ( plans.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: 'No existen planes de practicas pre profesionales aún.'
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: plans
            })            

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: 'Error en el servidor.'
            })
        }

    }

}