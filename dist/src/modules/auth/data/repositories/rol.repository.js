"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolRepositoryImpl = void 0;
const database_1 = require("../../../../config/database");
const entities_1 = require("../entities");
class RolRepositoryImpl {
    constructor() {
        this.repository = database_1.AppDataSource.getRepository(entities_1.RolesEntity);
    }
    async getRolById(id) {
        return this.repository.findOneBy({ id });
    }
}
exports.RolRepositoryImpl = RolRepositoryImpl;
//# sourceMappingURL=rol.repository.js.map