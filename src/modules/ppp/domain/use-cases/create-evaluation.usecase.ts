import { Response } from "express";
import { plainToClass } from "class-transformer";


import { EvaluationRepository, PPPRepository, QuestionAnswerRepository } from "../repositories";
import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { EvaluationEntity, QuestionAnswerEntity } from "../../data/entities";
import { CreateEvaluationDto } from "../dtos";

export class CreateEvaluationUseCase{

    constructor(
        private readonly response                   : Response,
        private readonly createEvaluationDto        : CreateEvaluationDto, 
        private readonly repository                 : EvaluationRepository,
        private readonly pppRepository              : PPPRepository,
        private readonly questionAnswerRepository   : QuestionAnswerRepository,

    ){ }

    async execute(){

        const { error } = CreateEvaluationDto.schema.validate( this.createEvaluationDto )

        if( error ){
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }

        try {

            const evaluationInstanced = plainToClass( EvaluationEntity, this.createEvaluationDto )
            const newEvaluation = await this.repository.create( evaluationInstanced )

            const pppFound = await this.pppRepository.findOnebyId( this.createEvaluationDto.ppp)
            
            if( !pppFound ){
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe el ppp con id #${ this.createEvaluationDto.ppp }`
                });
            }

            newEvaluation.ppp = pppFound

            const evaluationCreated = await this.repository.save(newEvaluation)

            

            this.createEvaluationDto.questions.forEach( async x => {

                const questionsInstanced = plainToClass( QuestionAnswerEntity, x)
                
                const newQuestion = await this.questionAnswerRepository.create(questionsInstanced)
                newQuestion.evaluations = evaluationCreated
                
                const questionCreated = await this.questionAnswerRepository.save(newQuestion)                

            })

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Evaluación creada correctamente.',
                data: evaluationCreated
            });

        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
            
        }
    }
}