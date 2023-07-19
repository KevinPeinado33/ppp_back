"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const repositories_1 = require("../../data/repositories");
const use_cases_1 = require("../../domain/use-cases");
class AuthController {
    constructor() {
        this.userRepository = new repositories_1.UserRepositoryImpl();
        this.postLogin = this.postLogin.bind(this);
        this.postRegister = this.postRegister.bind(this);
    }
    postLogin(req, res) {
        const loginDto = req.body;
        const usecase = new use_cases_1.LoginUseCase(res, loginDto, this.userRepository);
        usecase.execute();
    }
    postRegister(req, res) {
        const createUserDto = req.body;
        const usecase = new use_cases_1.CreateUserUseCase(res, createUserDto, this.userRepository);
        usecase.execute();
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map