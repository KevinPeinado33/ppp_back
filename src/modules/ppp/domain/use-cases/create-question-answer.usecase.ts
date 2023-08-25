import { Response } from "express";
import { plainToClass } from "class-transformer";


import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { message } from "../../../../common/responses/msg.response";
import { CreateQuestionAnswerDto } from "../dtos";
import { EvaluationRepository, QuestionAnswerRepository } from "../repositories";
import { QuestionAnswerEntity } from "../../data/entities";

export class CreateQuestionAnswerUseCase{
    
    constructor(
        private readonly response                   : Response,
        private readonly createQuestionAnswerDto    : CreateQuestionAnswerDto,
        private readonly repository                 : QuestionAnswerRepository,
        private readonly evaluationRepository       : EvaluationRepository
    ){ }

    async execute() {

        const { error } = CreateQuestionAnswerDto.schema.validate( this.createQuestionAnswerDto )

        if( error ){
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {
            
            const questionAnswerInstanced = plainToClass( QuestionAnswerEntity, this.createQuestionAnswerDto )
            const newQuestionAnswer = await this.repository.create(questionAnswerInstanced)

            const evaluationFound = await this.evaluationRepository.findOneById( this.createQuestionAnswerDto.evaluations )

            if( !evaluationFound ){
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe la evaluación con id #${ this.createQuestionAnswerDto.evaluations }`
                })
            }

            newQuestionAnswer.evaluations = evaluationFound

            const questionAnswerCreated = await this.repository.save(newQuestionAnswer)

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'QuestionAnswer creado correctamente',
                data: questionAnswerCreated
            })

        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
    }
}