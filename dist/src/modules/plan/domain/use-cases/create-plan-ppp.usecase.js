"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlanPPPUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const dtos_1 = require("../dtos");
class CreatePlanPPPUseCase {
    constructor(response, createPlanPPPDto, repository) {
        this.response = response;
        this.createPlanPPPDto = createPlanPPPDto;
        this.repository = repository;
    }
    async execute() {
        const { error } = dtos_1.CreatePlanPPPDto.schema.validate(this.createPlanPPPDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const newPlanPPP = await this.repository.create(this.createPlanPPPDto);
            const planPPPCreated = await this.repository.save(newPlanPPP);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Plan de PPP creado correcamente',
                data: planPPPCreated
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
}
exports.CreatePlanPPPUseCase = CreatePlanPPPUseCase;
//# sourceMappingURL=create-plan-ppp.usecase.js.map