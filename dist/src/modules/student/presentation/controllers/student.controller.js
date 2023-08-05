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
        this.postCreateListStudents = this.postCreateListStudents.bind(this);
    }
    getOneByCode(request, response) { }
    getAllStudents(req, res) {
        const { planPPP } = req.params;
        const usecase = new use_cases_1.FindAllStudentUseCase(res, this.studentRepository, planPPP);
        usecase.execute();
    }
    postCreateListStudents(req, res) {
        const listStudents = req.body;
        const usecase = new use_cases_1.CreateListStudentsUseCase(res, this.studentRepository, listStudents);
        usecase.execute();
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map