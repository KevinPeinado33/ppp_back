"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const usecases_1 = require("../../domain/usecases");
const repositories_1 = require("../../data/repositories");
class AuthController {
    constructor() {
        this.userRepository = new repositories_1.UserImplRepository();
        this.postLogin = this.postLogin.bind(this);
        this.postRegister = this.postRegister.bind(this);
    }
    postLogin(req, res) {
        const loginDto = req.body;
        const usecase = new usecases_1.LoginUseCase(res, loginDto, this.userRepository);
        usecase.execute();
    }
    postRegister(req, res) { }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map