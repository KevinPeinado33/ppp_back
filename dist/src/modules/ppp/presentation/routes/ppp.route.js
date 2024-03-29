"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller");
const jwt_1 = require("../../../../common/middlewares/jwt");
const route = (0, express_1.Router)();
const { getEvaluationHistory, getResultSatisfaction, getDocumentsPPP, postCreateEvaluation, postCreateQuestionAnswer, putTakeEvaluation } = new controller_1.EvaluationController();
const { updateAssingAdvisor, postcompanyPPP, updateIntershipHours, updateRegisterLetterAceptance, updateClosePpp, getViewStudentProfile } = new controller_1.PPPController();
const { postCreatePPPDocument, postInsertCommentDocument, deleteDocumentPPP } = new controller_1.PPPDocumentController();
route.get('/get-evaluation-by-ppp/:idPPP', jwt_1.validateJWT, getEvaluationHistory);
route.put('/update-assing-advisor-ppp/:idPPP/:advisorID', jwt_1.validateJWT, updateAssingAdvisor);
route.get('/get-result-evaluation/:idEvaluation', jwt_1.validateJWT, getResultSatisfaction);
route.get('/get-documents-ppp/:idPPP', jwt_1.validateJWT, getDocumentsPPP);
route.get("/view-student-profile/:idPPP", jwt_1.validateJWT, getViewStudentProfile);
route.post('/create-company-ppp', jwt_1.validateJWT, postcompanyPPP);
route.post('/create-ppp-document', jwt_1.validateJWT, postCreatePPPDocument);
route.put('/update-intership-hours', jwt_1.validateJWT, updateIntershipHours);
route.put('/update-register-letter-aceptance/:id', jwt_1.validateJWT, updateRegisterLetterAceptance);
route.put("/update-close-ppp/:id", jwt_1.validateJWT, updateClosePpp);
route.post('/create-evaluation', postCreateEvaluation);
route.post('/create-question-answer', jwt_1.validateJWT, postCreateQuestionAnswer);
route.post('/insert-comment-document/:idDocumentPPP', jwt_1.validateJWT, postInsertCommentDocument);
route.put('/take-evaluation/:idEvaluation', putTakeEvaluation);
route.delete('/delete-document-ppp/:idPPPDocument', jwt_1.validateJWT, deleteDocumentPPP);
exports.default = route;
//# sourceMappingURL=ppp.route.js.map