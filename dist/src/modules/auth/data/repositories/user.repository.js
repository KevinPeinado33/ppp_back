"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserImplRepository = void 0;
const models_1 = require("../models");
class UserImplRepository {
    async findUserByEmail(email) {
        return await models_1.UserModel.findOne({ email });
    }
}
exports.UserImplRepository = UserImplRepository;
//# sourceMappingURL=user.repository.js.map