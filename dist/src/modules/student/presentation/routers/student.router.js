"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const jwt_1 = require("../../../../common/middlewares/jwt");
const router = (0, express_1.Router)();
const { getStudentByCode, getAllStudents, getStudentsSemester, getStudentsProcessEnd, postCreateListStudents, postCreateStudent, getStudentBId } = new controllers_1.StudentController();
router.get('/get-by-code/:codeStudent', jwt_1.validateJWT, getStudentByCode);
router.get('/get-by-id-profile/:id', getStudentBId);
router.get('/get-students-by-plan-ppp/:planPPP', jwt_1.validateJWT, getAllStudents);
router.get('/get-students-by-semester/:cycle', jwt_1.validateJWT, getStudentsSemester);
router.get('/get-students-process-or-end/:finalRate', jwt_1.validateJWT, getStudentsProcessEnd);
router.post('/create-list-students', jwt_1.validateJWT, postCreateListStudents);
router.post('/create-student', postCreateStudent);
exports.default = router;
//# sourceMappingURL=student.router.js.map