"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const jwt_1 = require("../../../../common/middlewares/jwt");
const router = (0, express_1.Router)();
const { getAllPlans, postCreatePlan, postCreateAreaPlan, postCreateQuestionEvaluation, postCreateDocument, getTypesDocuments } = new controllers_1.PlanController();
router.get('/get-all', jwt_1.validateJWT, getAllPlans);
router.post('/create-plan-ppp', jwt_1.validateJWT, postCreatePlan);
router.post('/create-area-plan', jwt_1.validateJWT, postCreateAreaPlan);
router.post('/create-question-evaluation', jwt_1.validateJWT, postCreateQuestionEvaluation);
router.post('/create-document-plan', jwt_1.validateJWT, postCreateDocument);
router.get('/get-all-types-documents', jwt_1.validateJWT, getTypesDocuments);
exports.default = router;
//# sourceMappingURL=plan.route.js.map