"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const jwt_1 = require("../../../../common/middlewares/jwt");
const router = (0, express_1.Router)();
const { getOneByCode, getAllStudents, postCreateListStudents } = new controllers_1.StudentController();
router.get('/get-by-code', jwt_1.validateJWT, getOneByCode);
router.get('/get-students-by-plan-ppp/:planPPP', jwt_1.validateJWT, getAllStudents);
router.post('/create-list-students', jwt_1.validateJWT, postCreateListStudents);
exports.default = router;
//# sourceMappingURL=student.router.js.map