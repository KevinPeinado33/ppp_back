import { AppDataSource } from "../../../../config/database";

import { NotificationRepository } from "../../domain/repositories";
import { ShareEntity } from "../entities";
import { NotificationsEntity } from "../entities";

export class NotificationRepositoryImpl implements NotificationRepository{

    private notificationRepository = AppDataSource.getRepository(NotificationsEntity)
    private shareRepository = AppDataSource.getRepository(ShareEntity)

    constructor(){}

    async save(saveNotification: NotificationsEntity): Promise<NotificationsEntity> {
        return await this.notificationRepository.save(saveNotification)
    }
    async create(createNotification: NotificationsEntity): Promise<NotificationsEntity> {
        return await this.notificationRepository.create(createNotification)
    }
    async saveShare(saveShare: ShareEntity): Promise<ShareEntity> {
        return await this.shareRepository.save(saveShare)
    }
    async createShare(createShare: ShareEntity): Promise<ShareEntity> {
        return await this.shareRepository.save(createShare)
    }

}
