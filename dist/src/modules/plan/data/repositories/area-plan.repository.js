"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaPlanRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class AreaPlanRepositoryImpl {
    constructor() {
        this.areaPlanRepository = database_1.AppDataSource.getRepository(entities_1.AreaPlanEntity);
    }
    async findById(id) {
        return await this.areaPlanRepository.findOneBy({ id });
    }
    async create(createAreaPlan) {
        return await this.areaPlanRepository.create(createAreaPlan);
    }
    async save(areaPlanCreated) {
        return await this.areaPlanRepository.save(areaPlanCreated);
    }
    async findAll(idPlan) {
        return await this.areaPlanRepository.findBy({ plan: { id: idPlan } });
    }
}
exports.AreaPlanRepositoryImpl = AreaPlanRepositoryImpl;
//# sourceMappingURL=area-plan.repository.js.map