import { Response, Request } from "express";
import { NotificationRepository } from "../../domain/repositories";
import { NotificationRepositoryImpl } from "../../data/repositories/notification.repository";
import { NotificationsDto } from "../../domain/dtos";
import { NotificationEndPPPUseCase } from "../../domain/use-cases/notification-end-ppp.usecase";
import { UserRepository } from "../../../auth/domain/repositories";
import { UserRepositoryImpl } from "../../../auth/data/repositories";


export class NotificationController{

    private notificationRepository: NotificationRepository
    private userRepository: UserRepository


    constructor(){
        this.notificationRepository = new NotificationRepositoryImpl()
        this.userRepository = new UserRepositoryImpl()

        this.postNotification = this.postNotification.bind(this)
    }

    postNotification(req: Request, res: Response){
        const createNotificationDto = req.body as NotificationsDto
        const usecase = new NotificationEndPPPUseCase(
            res,
            this.notificationRepository,
            createNotificationDto,
            this.userRepository
        )

        usecase.execute()
    }

}