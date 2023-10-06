"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleController = void 0;
const node_cron_1 = __importDefault(require("node-cron"));
const repositories_1 = require("../../../ppp/data/repositories");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const notification_repository_1 = require("../../data/repositories/notification.repository");
const repositories_2 = require("../../../auth/data/repositories");
const entities_1 = require("../../data/entities");
const scheduleController = () => {
    const pppRepository = new repositories_1.PPPRepositoryImpl();
    const repositoryUser = new repositories_2.UserRepositoryImpl();
    const repositoryNoti = new notification_repository_1.NotificationRepositoryImpl();
    node_cron_1.default.schedule("0 09 18 * * *", async () => {
        try {
            const pppData = await pppRepository.getStartDate();
            const idAdmin = await repositoryUser.findById('1ee7702a-ee51-418c-aa2f-95e2f6087365');
            let idUsuario;
            let startDatePPP;
            // para el primerito
            const notificationInstance = new entities_1.NotificationsEntity();
            notificationInstance.title = 'Ya va a empezar';
            notificationInstance.message = 'Ya va a empezar manito';
            notificationInstance.property = idAdmin;
            const newNotification = await repositoryNoti.create(notificationInstance);
            await repositoryNoti.save(newNotification);
            // para el primerito finsito
            pppData.forEach(async (value) => {
                idUsuario = value['advisorId'];
                startDatePPP = value['started_date'];
                console.log(idUsuario, startDatePPP);
                const startDatePPPString = String(startDatePPP);
                const startDatePPPNew = new Date(startDatePPPString);
                const actualDatee = Date.now();
                // Calcular la diferencia entre la nueva fecha y la fecha actual
                const diff = (actualDatee - startDatePPPNew.getTime()) / (1000 * 60 * 60 * 24);
                // Validar que la fecha de inicio es anterior a dos semanas
                if (diff >= 14) {
                    notificationStartEvaluation(idUsuario.toString(), newNotification);
                    console.log(idUsuario);
                }
            });
        }
        catch (error) {
            console.log("error: " + error);
        }
    });
    const notificationStartEvaluation = async (idUsuario, notification) => {
        const foundUser = await repositoryUser.findById(idUsuario);
        if (!foundUser) {
            throw new Error(`No existe Usuario con id#${idUsuario}`);
        }
        const shareInstance = new entities_1.ShareEntity();
        shareInstance.address = foundUser;
        shareInstance.notification = notification;
        await repositoryNoti.saveShare(shareInstance);
        console.log({
            code: code_status_ok_1.CODE_STATUS.CREATED,
            info: 'Notificación creada correctamente'
        });
    };
};
exports.scheduleController = scheduleController;
//# sourceMappingURL=cron-schedule.controller.js.map