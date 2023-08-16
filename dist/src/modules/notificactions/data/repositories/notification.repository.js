"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
const entities_2 = require("../entities");
class NotificationRepositoryImpl {
    constructor() {
        this.notificationRepository = database_1.AppDataSource.getRepository(entities_2.NotificationsEntity);
        this.shareRepository = database_1.AppDataSource.getRepository(entities_1.ShareEntity);
    }
    async save(saveNotification) {
        return await this.notificationRepository.save(saveNotification);
    }
    async create(createNotification) {
        return await this.notificationRepository.create(createNotification);
    }
    async saveShare(saveShare) {
        return await this.shareRepository.save(saveShare);
    }
    async createShare(createShare) {
        return await this.shareRepository.save(createShare);
    }
}
exports.NotificationRepositoryImpl = NotificationRepositoryImpl;
//# sourceMappingURL=notification.repository.js.map