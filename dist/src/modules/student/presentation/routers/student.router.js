"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const jwt_1 = require("../../../../common/middlewares/jwt");
const router = (0, express_1.Router)();
const { getOneByCode, getAllStudents } = new controllers_1.StudentController();
router.get('/get-by-code', jwt_1.validateJWT, getOneByCode);
router.get('/get-all-students', getAllStudents);
exports.default = router;
//# sourceMappingURL=student.router.js.map