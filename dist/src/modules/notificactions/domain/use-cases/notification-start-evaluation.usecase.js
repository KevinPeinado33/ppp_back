"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationEndPPPUseCase = void 0;
const notification_create_dtos_1 = require("../dtos/notification-create.dtos");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../data/entities");
class NotificationEndPPPUseCase {
    constructor(response, repositoryNoti, dtoNotification, repositoryUser) {
        this.response = response;
        this.repositoryNoti = repositoryNoti;
        this.dtoNotification = dtoNotification;
        this.repositoryUser = repositoryUser;
    }
    async execute() {
        const { error } = notification_create_dtos_1.NotificationsDto.schema.validate(this.dtoNotification);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const notificationInstace = (0, class_transformer_1.plainToClass)(entities_1.NotificationsEntity, this.dtoNotification);
            const newNotification = await this.repositoryNoti.create(notificationInstace);
            const foundUser = await this.findUser(this.dtoNotification.property);
            if (!foundUser) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe Usuario con id#${this.dtoNotification.property}`
                });
            }
            newNotification.property = foundUser;
            await this.repositoryNoti.save(newNotification);
            this.dtoNotification.share.forEach(async (x) => {
                const shareInstance = new entities_1.ShareEntity();
                const foundUser = await this.findUser(x);
                shareInstance.address = foundUser;
                shareInstance.notification = newNotification;
                //const newShare = await this.repositoryNoti.createShare(shareInstance)
                await this.repositoryNoti.saveShare(shareInstance);
            });
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Notificación creada correctamente'
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
        }
    }
    async findUser(userId) {
        const foundUser = await this.repositoryUser.findById(userId);
        return foundUser;
    }
}
exports.NotificationEndPPPUseCase = NotificationEndPPPUseCase;
//# sourceMappingURL=notification-start-evaluation.usecase.js.map