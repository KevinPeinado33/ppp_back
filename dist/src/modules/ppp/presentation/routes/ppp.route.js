"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluation_controller_1 = require("../controller/evaluation.controller");
const controller_1 = require("../controller");
const jwt_1 = require("../../../../common/middlewares/jwt");
const route = (0, express_1.Router)();
const { getEvaluationHistory, getResultSatisfaction, getDocumentsPPP, } = new evaluation_controller_1.EvaluationController();
const { updateAssingAdvisor, postcompanyPPP, updateIntershipHours, } = new controller_1.PPPController();
const { postCreatePPPDocument, } = new controller_1.PPPDocumentController();
route.get('/get-evaluation-by-ppp/:idPPP', jwt_1.validateJWT, getEvaluationHistory);
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID', jwt_1.validateJWT, updateAssingAdvisor);
route.get('/get-result-evaluation/:idEvaluation', jwt_1.validateJWT, getResultSatisfaction);
route.get('/get-documents-ppp/:idPPP', jwt_1.validateJWT, getDocumentsPPP);
<<<<<<< HEAD
=======
route.post('/create-company-ppp', jwt_1.validateJWT, postcompanyPPP);
route.post('/create-ppp-document', jwt_1.validateJWT, postCreatePPPDocument);
route.put('/update-intership-hours', jwt_1.validateJWT, updateIntershipHours);
>>>>>>> develop
exports.default = route;
//# sourceMappingURL=ppp.route.js.map