import cron from 'node-cron'
import { PPPRepositoryImpl } from '../../../ppp/data/repositories'
import { UserRepository } from '../../../auth/domain/repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { NotificationRepositoryImpl } from '../../data/repositories/notification.repository'
import { UserRepositoryImpl } from '../../../auth/data/repositories'
import { NotificationsEntity, ShareEntity } from '../../data/entities'
import { UserEntity } from '../../../auth/data/entities'

export const scheduleController = () => {
    const pppRepository = new PPPRepositoryImpl()
    const repositoryUser = new UserRepositoryImpl()
    const repositoryNoti = new NotificationRepositoryImpl()


    cron.schedule("0 09 18 * * *", async () => {

        try {

            const pppData = await pppRepository.getStartDate()
            const idAdmin = await repositoryUser.findById('1ee7702a-ee51-418c-aa2f-95e2f6087365')

            let idUsuario
            let startDatePPP
            
            // para el primerito
            const notificationInstance = new NotificationsEntity()

            notificationInstance.title = 'Ya va a empezar'
            notificationInstance.message = 'Ya va a empezar manito'
            notificationInstance.property = idAdmin!
            
            
            const newNotification = await repositoryNoti.create(notificationInstance)
            await repositoryNoti.save(newNotification)
            // para el primerito finsito

            pppData.forEach(async (value) => {

                idUsuario = value['advisorId' as keyof typeof value];
                startDatePPP = value['started_date' as keyof typeof value];

                console.log(idUsuario, startDatePPP)

                const startDatePPPString = String(startDatePPP)

                const startDatePPPNew = new Date(startDatePPPString);

                const actualDatee = Date.now();

                // Calcular la diferencia entre la nueva fecha y la fecha actual
                const diff = (actualDatee - startDatePPPNew.getTime()) / (1000 * 60 * 60 * 24);

                // Validar que la fecha de inicio es anterior a dos semanas
                if (diff >= 14 ) {
                    notificationStartEvaluation(idUsuario.toString(), newNotification)
                    console.log(idUsuario)
                }

            });

        } catch (error) {
            console.log("error: " + error)
        }
    }
    )

    const notificationStartEvaluation = async (idUsuario: string, notification: NotificationsEntity) => {

        const foundUser = await repositoryUser.findById(idUsuario)
        
        if (!foundUser) {
            throw new Error( `No existe Usuario con id#${idUsuario}`)
        }

        const shareInstance = new ShareEntity()

        shareInstance.address = foundUser
        shareInstance.notification = notification

        await repositoryNoti.saveShare(shareInstance)

        console.log({
            code: CODE_STATUS.CREATED,
            info: 'Notificación creada correctamente'
        })

    }

}
