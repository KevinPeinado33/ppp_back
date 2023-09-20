"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationBlockEvaluationUseCase = void 0;
const dtos_1 = require("../dtos");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class NotificationBlockEvaluationUseCase {
    constructor(response, notificationRepository, dtoNotification, repositoryUser, evaluationEntity) {
        this.response = response;
        this.notificationRepository = notificationRepository;
        this.dtoNotification = dtoNotification;
        this.repositoryUser = repositoryUser;
        this.evaluationEntity = evaluationEntity;
    }
    async execute() {
        const { error } = dtos_1.NotificationsDto.schema.validate(this.dtoNotification);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const evaluationEndDate = new Date(this.evaluationEntity.dateEnd);
            evaluationEndDate.setDate(evaluationEndDate.getDate() - 1);
        }
        catch (error) {
        }
    }
    async obtainEndDateEvaluation() {
    }
}
exports.NotificationBlockEvaluationUseCase = NotificationBlockEvaluationUseCase;
//# sourceMappingURL=notification-block-evaluation.usecase.js.map