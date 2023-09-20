import { Response } from "express";
import { NotificationRepository } from "../repositories";
import { NotificationsDto } from "../dtos/notification-create.dtos";
import { UserRepository } from "../../../auth/domain/repositories";
import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { plainToClass } from "class-transformer";
import { NotificationsEntity, ShareEntity } from "../../data/entities";


export class NotificationEndPPPUseCase {

    constructor(
        private readonly response: Response,
        private readonly repositoryNoti: NotificationRepository,
        private readonly dtoNotification: NotificationsDto,
        private readonly repositoryUser: UserRepository,



    ) { }

    async execute() {

        const { error } = NotificationsDto.schema.validate(this.dtoNotification)

        if (error) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const notificationInstace = plainToClass(NotificationsEntity, this.dtoNotification)
            const newNotification = await this.repositoryNoti.create(notificationInstace)
            
            const foundUser = await this.findUser(this.dtoNotification.property)

            if (!foundUser) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe Usuario con id#${this.dtoNotification.property}`
                })
            }

            newNotification.property = foundUser

            await this.repositoryNoti.save(newNotification)

            this.dtoNotification.share.forEach(async x => {
                const shareInstance = new ShareEntity()
                const foundUser = await this.findUser(x)
                shareInstance.address = foundUser!
                shareInstance.notification = newNotification
                //const newShare = await this.repositoryNoti.createShare(shareInstance)
                await this.repositoryNoti.saveShare(shareInstance)
            })


            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                info: 'Notificación creada correctamente'

            })


        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
    }

    private async findUser(userId: string) {
        const foundUser = await this.repositoryUser.findById(userId)
        return foundUser
    }

}