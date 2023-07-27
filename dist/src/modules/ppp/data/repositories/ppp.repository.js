"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPPRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class PPPRepositoryImpl {
    constructor() {
        this.pppRepository = database_1.AppDataSource.getRepository(entities_1.PPPEntity);
    }
}
exports.PPPRepositoryImpl = PPPRepositoryImpl;
//# sourceMappingURL=ppp.repository.js.map