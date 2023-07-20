import { Response } from 'express'
import { plainToClass } from 'class-transformer'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { AreaPlanEntity } from '../../data/entities'
import { AreaPlanRepository, PlanPPPRepository } from '../repositories'
import { CreateAreaPlanDto } from '../dtos'

export class CreateAreaPlanUseCase {

    constructor(
        private readonly response          : Response,
        private readonly createAreaPlanDto : CreateAreaPlanDto,
        private readonly repository        : AreaPlanRepository,
        private readonly planPPPRepository : PlanPPPRepository
    ) { }

    async execute() {

        const { error } = CreateAreaPlanDto.schema.validate( this.createAreaPlanDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })  
        }

        try {
            
            const areaPlanInstances = plainToClass(AreaPlanEntity, this.createAreaPlanDto)
            const newAreaPlan       = await this.repository.create( areaPlanInstances )

            const planPPPFound      = await this.planPPPRepository.findById( this.createAreaPlanDto.plan )

            if ( !planPPPFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe plan PPP con id #${ this.createAreaPlanDto.plan }.`
                })
            }

            newAreaPlan.plan      = planPPPFound

            const areaPlanCreated = await this.repository.save( newAreaPlan )

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                data: areaPlanCreated
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
