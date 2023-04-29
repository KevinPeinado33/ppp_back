"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const use_cases_1 = require("../../domain/use-cases");
const repositories_1 = require("../../data/repositories");
class StudentController {
    constructor() {
        this.studentRepository = new repositories_1.StudentImplRepository();
        this.postCreate = this.postCreate.bind(this);
        this.getOneByCode = this.getOneByCode.bind(this);
        this.getAll = this.getAll.bind(this);
    }
    postCreate(request, response) {
        const studentCreate = request.body;
        const usecase = new use_cases_1.CreateStudentUseCase(response, this.studentRepository, studentCreate);
        usecase.execute();
    }
    getOneByCode(request, response) { }
    getAll(request, response) {
        const usecase = new use_cases_1.GetAllStudentUseCase(response, this.studentRepository);
        usecase.execute();
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map