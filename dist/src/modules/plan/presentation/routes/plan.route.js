"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const { getAllPlans, postCreatePlan, postCreateAreaPlan, postCreateQuestionEvaluation, postCreateDocument, getTypesDocuments } = new controllers_1.PlanController();
router.get('/get-all', getAllPlans);
router.post('/create-plan-ppp', postCreatePlan);
router.post('/create-area-plan', postCreateAreaPlan);
router.post('/create-question-evaluation', postCreateQuestionEvaluation);
router.post('/create-document-plan', postCreateDocument);
router.get('/get-all-types-documents', getTypesDocuments);
exports.default = router;
//# sourceMappingURL=plan.route.js.map