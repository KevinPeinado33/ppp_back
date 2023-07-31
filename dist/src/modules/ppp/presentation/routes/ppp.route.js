"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluation_controller_1 = require("../controller/evaluation.controller");
const ppp_controller_1 = require("../controller/ppp.controller");
const jwt_1 = require("../../../../common/middlewares/jwt");
const route = (0, express_1.Router)();
const { getEvaluationHistory, getResultSatisfaction, getDocumentsPPP } = new evaluation_controller_1.EvaluationController();
const { updateAssingAdvisor } = new ppp_controller_1.PPPController();
route.get('/get-evaluation-by-ppp/:idPPP', jwt_1.validateJWT, getEvaluationHistory);
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID', jwt_1.validateJWT, updateAssingAdvisor);
route.get('/get-result-satisfaction/:idEvaluation', getResultSatisfaction);
route.get('/get-documents-ppp/:idPPP', getDocumentsPPP);
exports.default = route;
//# sourceMappingURL=ppp.route.js.map