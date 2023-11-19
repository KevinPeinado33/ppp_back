"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const use_cases_1 = require("../../domain/use-cases");
const repositories_1 = require("../../data/repositories");
const repositories_2 = require("../../../ppp/data/repositories");
const create_oneself_student_usecase_1 = require("../../domain/use-cases/create-oneself-student.usecase");
const repositories_3 = require("../../../auth/data/repositories");
const rol_repository_1 = require("../../../auth/data/repositories/rol.repository");
const repositories_4 = require("../../../plan/data/repositories");
class StudentController {
    constructor() {
        this.studentRepository = new repositories_1.StudentRepositoryImpl();
        this.pppRepository = new repositories_2.PPPRepositoryImpl();
        this.userRepository = new repositories_3.UserRepositoryImpl();
        this.rolRepository = new rol_repository_1.RolRepositoryImpl();
        this.planPPPRepository = new repositories_4.PlanPPPRepositoryImpl();
        this.getStudentByCode = this.getStudentByCode.bind(this);
        this.getAllStudents = this.getAllStudents.bind(this);
        this.getStudentsSemester = this.getStudentsSemester.bind(this);
        this.postCreateListStudents = this.postCreateListStudents.bind(this);
        this.getStudentsProcessEnd = this.getStudentsProcessEnd.bind(this);
        this.postCreateStudent = this.postCreateStudent.bind(this);
        this.getStudentBId = this.getStudentBId.bind(this);
    }
    getStudentByCode(req, res) {
        const { codeStudent } = req.params;
        const usecase = new use_cases_1.FindStudentUseCase(res, this.studentRepository, this.pppRepository, codeStudent);
        usecase.execute();
    }
    getStudentBId(req, res) {
        const { id } = req.params;
        const usecase = new use_cases_1.GetProfileByIdUseCase(res, this.studentRepository, this.userRepository, this.pppRepository, id);
        usecase.execute();
    }
    getAllStudents(req, res) {
        const { planPPP } = req.params;
        const usecase = new use_cases_1.FindAllStudentUseCase(res, this.studentRepository, planPPP);
        usecase.execute();
    }
    getStudentsSemester(req, res) {
        const { cycle } = req.params;
        const usecase = new use_cases_1.FindStudentsSemesterUseCase(res, this.studentRepository, Number(cycle));
        usecase.execute();
    }
    getStudentsProcessEnd(req, res) {
        const { finalRate } = req.params;
        const usecase = new use_cases_1.FindStudentsProcessOrEnd(res, this.studentRepository, Number(finalRate));
        usecase.execute();
    }
    postCreateListStudents(req, res) {
        const listStudents = req.body;
        const usecase = new use_cases_1.CreateListStudentsUseCase(res, this.studentRepository, listStudents);
        usecase.execute();
    }
    postCreateStudent(req, res) {
        const createStudentDto = req.body;
        const usecase = new create_oneself_student_usecase_1.CreateOneSelfStudentUseCase(res, this.studentRepository, this.userRepository, createStudentDto, this.rolRepository, this.pppRepository, this.planPPPRepository);
        usecase.execute();
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map