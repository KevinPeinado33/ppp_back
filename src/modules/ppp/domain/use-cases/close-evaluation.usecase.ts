import { Response } from 'express'

import { EvaluationRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class CloseEvaluationUsecase {
    
    constructor (
        private readonly response: Response,
        private readonly evaluationRepository: EvaluationRepository,
        private readonly idPpp: string
    ) { }

    async execute() {
        
        try {

            const evaluationsFound = await this.evaluationRepository.getEvaluationsByPPP( this.idPpp )

            if ( !evaluationsFound ) {
                
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe evaluaciones con id #${ this.idPpp }.`
                })

            }

            Promise.all( evaluationsFound.map( async evaluation => {

                const currentDate = new Date()
                
                if ( evaluation.createdAt ) {

                }
                
            }))

        } catch( error ) {

        }

    }

}
