"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanPPPRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class PlanPPPRepositoryImpl {
    constructor() {
        this.planRepository = database_1.AppDataSource.getRepository(entities_1.PlanPPPEntity);
    }
    async findById(id) {
        return await this.planRepository.findOneBy({ id });
    }
    async findAll() {
        return await this.planRepository.find();
    }
    async create(newPlanPPP) {
        return await this.planRepository.create(newPlanPPP);
    }
    async save(planPPPCreated) {
        return await this.planRepository.save(planPPPCreated);
    }
}
exports.PlanPPPRepositoryImpl = PlanPPPRepositoryImpl;
//# sourceMappingURL=plan-ppp.repository.js.map