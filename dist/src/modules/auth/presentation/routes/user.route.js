"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../../../../common/middlewares/jwt");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
const { postRegister, getAllUsers } = new controllers_1.UserController();
router.post('/register', jwt_1.validateJWT, postRegister);
router.get('/get-all', jwt_1.validateJWT, getAllUsers);
exports.default = router;
//# sourceMappingURL=user.route.js.map