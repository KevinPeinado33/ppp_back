"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAreaPlanUseCase = void 0;
const class_transformer_1 = require("class-transformer");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const entities_1 = require("../../data/entities");
const dtos_1 = require("../dtos");
class CreateAreaPlanUseCase {
    constructor(response, createAreaPlanDto, repository, planPPPRepository) {
        this.response = response;
        this.createAreaPlanDto = createAreaPlanDto;
        this.repository = repository;
        this.planPPPRepository = planPPPRepository;
    }
    async execute() {
        const { error } = dtos_1.CreateAreaPlanDto.schema.validate(this.createAreaPlanDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const areaPlanInstances = (0, class_transformer_1.plainToClass)(entities_1.AreaPlanEntity, this.createAreaPlanDto);
            const newAreaPlan = await this.repository.create(areaPlanInstances);
            const planPPPFound = await this.planPPPRepository.findById(this.createAreaPlanDto.plan);
            if (!planPPPFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe plan PPP con id #${this.createAreaPlanDto.plan}.`
                });
            }
            newAreaPlan.plan = planPPPFound;
            const areaPlanCreated = await this.repository.save(newAreaPlan);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                data: areaPlanCreated
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
exports.CreateAreaPlanUseCase = CreateAreaPlanUseCase;
//# sourceMappingURL=create-area-plan.usecase.js.map