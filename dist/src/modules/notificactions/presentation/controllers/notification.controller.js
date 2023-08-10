"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const notification_repository_1 = require("../../data/repositories/notification.repository");
const notification_end_ppp_usecase_1 = require("../../domain/use-cases/notification-end-ppp.usecase");
const repositories_1 = require("../../../auth/data/repositories");
class NotificationController {
    constructor() {
        this.notificationRepository = new notification_repository_1.NotificationRepositoryImpl();
        this.userRepository = new repositories_1.UserRepositoryImpl();
        this.postNotification = this.postNotification.bind(this);
    }
    postNotification(req, res) {
        const createNotificationDto = req.body;
        const usecase = new notification_end_ppp_usecase_1.NotificationEndPPPUseCase(res, this.notificationRepository, createNotificationDto, this.userRepository);
        usecase.execute();
    }
}
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map