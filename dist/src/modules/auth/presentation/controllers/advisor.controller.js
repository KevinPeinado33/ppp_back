"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvisorController = void 0;
const repositories_1 = require("../../data/repositories");
class AdvisorController {
    constructor() {
        this.userRepository = new repositories_1.UserRepositoryImpl();
    }
}
exports.AdvisorController = AdvisorController;
//# sourceMappingURL=advisor.controller.js.map