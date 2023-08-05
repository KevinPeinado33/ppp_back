"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPPController = void 0;
const repositories_1 = require("../../data/repositories");
const assing_advisor_ppp_usecases_1 = require("../../domain/use-cases/assing-advisor-ppp.usecases");
const repositories_2 = require("../../../auth/data/repositories");
class PPPController {
    constructor() {
        this.pppRepository = new repositories_1.PPPRepositoryImpl(),
            this.userRepository = new repositories_2.UserRepositoryImpl(),
            this.updateAssingAdvisor = this.updateAssingAdvisor.bind(this);
    }
    updateAssingAdvisor(req, res) {
        const { idPPP, advisorID } = req.params;
        const usecase = new assing_advisor_ppp_usecases_1.AssingAdvisorPppUseCase(res, this.pppRepository, idPPP, advisorID, this.userRepository);
        usecase.execute();
    }
}
exports.PPPController = PPPController;
//# sourceMappingURL=ppp.controller.js.map