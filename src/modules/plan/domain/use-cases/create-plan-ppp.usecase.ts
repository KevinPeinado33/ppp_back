import { Response } from 'express'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { PlanPPPRepository } from '../repositories'
import { CreatePlanPPPDto } from '../dtos'

export class CreatePlanPPPUseCase {

    constructor(
        private readonly response:         Response,
        private readonly createPlanPPPDto: CreatePlanPPPDto,
        private readonly repository:       PlanPPPRepository
    ) { }

    async execute() {
        
        const { error } = CreatePlanPPPDto.schema.validate( this.createPlanPPPDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const newPlanPPP = await this.repository.create( this.createPlanPPPDto )

            const planPPPCreated = await this.repository.save( newPlanPPP )

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Plan de PPP creado correcamente',
                data: planPPPCreated
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
