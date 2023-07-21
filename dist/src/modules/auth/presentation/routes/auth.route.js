"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const { postLogin, postRegister, getAllUsers } = new controllers_1.AuthController();
router.post('/login', postLogin);
router.post('/register', postRegister);
router.get('/kevin-aea', getAllUsers);
exports.default = router;
//# sourceMappingURL=auth.route.js.map