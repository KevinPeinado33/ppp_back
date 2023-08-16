"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const jwt_1 = require("../../../../common/middlewares/jwt");
const route = (0, express_1.Router)();
const { postNotification } = new controllers_1.NotificationController();
route.post('/create-notification', jwt_1.validateJWT, postNotification);
exports.default = route;
//# sourceMappingURL=notification.router.js.map