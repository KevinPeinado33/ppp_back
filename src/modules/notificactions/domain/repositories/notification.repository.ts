import { NotificationsEntity, ShareEntity } from "../../data/entities";

export abstract class NotificationRepository{

    abstract save (saveNotification: NotificationsEntity): Promise < NotificationsEntity >
    abstract create (createNotification: NotificationsEntity): Promise <NotificationsEntity>
    abstract saveShare(saveShare: ShareEntity): Promise <ShareEntity>
    abstract createShare(createShare: ShareEntity): Promise <ShareEntity>


}