"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluation_controller_1 = require("../controller/evaluation.controller");
const route = (0, express_1.Router)();
const { getEvaluationHistory } = new evaluation_controller_1.EvaluationController();
route.get('/get-evaluation-by-ppp/:idPPP', getEvaluationHistory);
exports.default = route;
//# sourceMappingURL=ppp.route.js.map