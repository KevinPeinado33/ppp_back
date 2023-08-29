import { Response } from "express";
import { NotificationRepository } from "../repositories";
import { NotificationsDto } from "../dtos";
import { UserRepository } from "../../../auth/domain/repositories";
import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { EvaluationEntity } from "../../../ppp/data/entities";

export class NotificationBlockEvaluationUseCase{
    constructor(
        private readonly response: Response,
        private readonly notificationRepository: NotificationRepository,
        private readonly dtoNotification : NotificationsDto,
        private readonly repositoryUser: UserRepository,
        private readonly evaluationEntity: EvaluationEntity
    ){}

    async execute(){

        const {error} = NotificationsDto.schema.validate(this.dtoNotification)

            if(error){
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: error.message
                })
            }

        try{


            const evaluationEndDate = new Date(this.evaluationEntity.dateEnd)
            evaluationEndDate.setDate(evaluationEndDate.getDate() - 1)
                        
        } catch (error){
            
        }
    }

    private async obtainEndDateEvaluation(){

    }
}