"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const use_cases_1 = require("../../domain/use-cases");
const repositories_1 = require("../../data/repositories");
class UserController {
    constructor() {
        this.userRepository = new repositories_1.UserRepositoryImpl();
        this.postRegister = this.postRegister.bind(this);
        this.getAllUsers = this.getAllUsers.bind(this);
        this.getUsersByRol = this.getUsersByRol.bind(this);
    }
    postRegister(req, res) {
        const createUserDto = req.body;
        const usecase = new use_cases_1.CreateUserUseCase(res, createUserDto, this.userRepository);
        usecase.execute();
    }
    getAllUsers(req, res) {
        const usecase = new use_cases_1.FindAllUserUseCase(res, this.userRepository);
        usecase.execute();
    }
    getUsersByRol(req, res) {
        const { rolSearch } = req.params;
        const usecase = new use_cases_1.FindUsersByRolUseCase(res, this.userRepository, rolSearch);
        usecase.execute();
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map