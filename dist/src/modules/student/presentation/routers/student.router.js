"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const jwt_1 = require("../../../../common/middlewares/jwt");
const router = (0, express_1.Router)();
const { postCreate, getOneByCode, getAll } = new controllers_1.StudentController();
router.post('/create', jwt_1.validateJWT, postCreate);
router.get('/get-by-code', jwt_1.validateJWT, getOneByCode);
router.get('/get-all', jwt_1.validateJWT, getAll);
exports.default = router;
//# sourceMappingURL=student.router.js.map