"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const { postCreate, getOneByCode, getAll } = new controllers_1.StudentController();
router.post('/create', postCreate);
router.get('/get-by-code', getOneByCode);
router.get('/get-all', getAll);
exports.default = router;
//# sourceMappingURL=student.router.js.map