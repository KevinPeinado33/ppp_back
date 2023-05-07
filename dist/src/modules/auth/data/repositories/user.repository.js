"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserImplRepository = void 0;
const models_1 = require("../models");
class UserImplRepository {
    constructor() { }
    async findUserByEmail(username) {
        return await models_1.UserModel.findOne({ username });
    }
    async create(userCreate) {
        return await models_1.UserModel.create(userCreate);
    }
}
exports.UserImplRepository = UserImplRepository;
//# sourceMappingURL=user.repository.js.map