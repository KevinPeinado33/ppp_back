import { Response } from "express";

import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { message } from "../../../../common/responses/msg.response";
import { EvaluationRepository, QuestionAnswerRepository } from "../repositories";
import { TakeEvaluationDto } from "../dtos";


export class TakeEvaluationUseCase{

    constructor(
        private readonly response                   : Response,
        private readonly takeEvaluationDto          : TakeEvaluationDto,
        private readonly evaluationRepository       : EvaluationRepository,
        private readonly questionAnswerRepository   : QuestionAnswerRepository,
        private readonly idEvaluation               : string,

    ){ }

    async execute(){

        const { error } = TakeEvaluationDto.schema.validate( this.takeEvaluationDto )

        if( error ){
            return message({
                response: this.response,
                code:CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }

        try {
            
            const evaluationFound = await this.evaluationRepository.findOneById( this.idEvaluation )

            if( !evaluationFound ){
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe el evaluación con el id #${ this.idEvaluation }`
                })
            }

            // Campos a actualizar
            evaluationFound.score = this.takeEvaluationDto.score,
            evaluationFound.observationBusinessMentor = this.takeEvaluationDto.observationBusinessMentor,
            evaluationFound.observationAdvisor = this.takeEvaluationDto.observationAdvisor
            evaluationFound.numberAttempts = this.takeEvaluationDto.numberAttempts

            await this.evaluationRepository.save(evaluationFound)

            Promise.all(
                this.takeEvaluationDto.answers.map( async ( answer ) => {
                    const questionAnswer = await this.questionAnswerRepository.findOneById( answer.id )

                    if (!questionAnswer) {
                        return message({
                            response: this.response,
                            code: CODE_STATUS.NOT_FOUND,
                            info: 'No hay respuestas en esta evaluación'
                        });
                    }

                    questionAnswer.answer = answer.answer
                    questionAnswer.puntuation = answer.puntuation      
            
                    await this.questionAnswerRepository.save( questionAnswer )
                })
            )


            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Cambios realizados correctamente',
                data: evaluationFound
            })
            
        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR, 
                info: error
            });
        }
    }
}