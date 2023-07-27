"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const use_cases_1 = require("../../domain/use-cases");
const repositories_1 = require("../../data/repositories");
class StudentController {
    constructor() {
        this.studentRepository = new repositories_1.StudentRepositoryImpl;
        this.getOneByCode = this.getOneByCode.bind(this);
        this.getAllStudents = this.getAllStudents.bind(this);
    }
    getOneByCode(request, response) { }
    getAllStudents(req, res) {
        const usecase = new use_cases_1.FindAllStudentUseCase(res, this.studentRepository);
        usecase.execute();
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map