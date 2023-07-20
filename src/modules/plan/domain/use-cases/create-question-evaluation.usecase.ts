import { Response } from 'express'
import { plainToClass } from 'class-transformer'

import { CreateQuestionEvaluationDto } from '../dtos'
import { AreaPlanRepository, QuestionEvaluationRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { QuestionEvaluationEntity } from '../../data/entities'

export class CreateQuestionEvaluationUseCase {
    
    constructor(
        private readonly response           : Response,
        private readonly createQuestionDto  : CreateQuestionEvaluationDto,
        private readonly repository         : QuestionEvaluationRepository,
        private readonly areaPlanRepository : AreaPlanRepository
    ) { }

    async execute() {

        const { error } = CreateQuestionEvaluationDto.schema.validate( this.createQuestionDto )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const questionEvaluationInstanced = plainToClass(QuestionEvaluationEntity, this.createQuestionDto)
            const newQuestionEvaluation       = await this.repository.create( questionEvaluationInstanced )

            const areaPlanFound = await this.areaPlanRepository.findById( this.createQuestionDto.area )

            if ( !areaPlanFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe un area con id #${ this.createQuestionDto.area }`
                })
            }

            newQuestionEvaluation.area = areaPlanFound

            const questionEvaluationCreated = await this.repository.save( newQuestionEvaluation )

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                data: questionEvaluationCreated
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