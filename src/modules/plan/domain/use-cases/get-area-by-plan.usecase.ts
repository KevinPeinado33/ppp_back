import { Response } from 'express'
import { AreaPlanRepository } from '../repositories';
import { message } from '../../../../common/responses/msg.response';
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok';

export class GetAreaByPlanUsecas {
    
    constructor(
        private readonly response: Response,
        private readonly areaPlanRepository: AreaPlanRepository,
        private readonly idPlan: string
    ) { }

    async execute() {
        try {

            const areasFound = await this.areaPlanRepository.findAll( this.idPlan )

            if ( areasFound.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No encontramos areas con plan id #${ this.idPlan }`
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: areasFound
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: 'Error con el servidor.'
            })

            console.log({ error })

        }
    }
}