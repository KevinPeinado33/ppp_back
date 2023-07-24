import { Response } from 'express'

import { PlanPPPRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class GetBasesPPPUseCase {

    constructor(
        private readonly response       : Response,
        private readonly planRepository : PlanPPPRepository
    ) { }

    async execute() {

        try {

            const basesObtanined = await this.planRepository.findBases()

            if ( basesObtanined.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: 'No se encontraron bases de PPP.'
                })
            }
            
            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: basesObtanined
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