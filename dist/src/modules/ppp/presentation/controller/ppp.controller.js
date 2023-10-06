"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PPPController = void 0;
const repositories_1 = require("../../data/repositories");
const assing_advisor_ppp_usecases_1 = require("../../domain/use-cases/assing-advisor-ppp.usecases");
const repositories_2 = require("../../../auth/data/repositories");
const use_cases_1 = require("../../domain/use-cases");
const update_intership_hour_usecase_1 = require("../../domain/use-cases/update-intership-hour.usecase");
const repositories_3 = require("../../../student/data/repositories");
const view_student_profile_usecase_1 = require("../../domain/use-cases/view-student-profile.usecase");
class PPPController {
    constructor() {
        this.pppRepository = new repositories_1.PPPRepositoryImpl();
        this.userRepository = new repositories_2.UserRepositoryImpl();
        this.companyRepository = new repositories_1.CompanyRepositoryImpl();
        this.studentRepository = new repositories_3.StudentRepositoryImpl();
        this.documentRepository = new repositories_1.PPPDocumentsRepositoryImpl();
        this.evaluationRepository = new repositories_1.EvaluationRepositoryImpl();
        this.updateAssingAdvisor = this.updateAssingAdvisor.bind(this);
        this.postcompanyPPP = this.postcompanyPPP.bind(this);
        this.updateIntershipHours = this.updateIntershipHours.bind(this);
        this.updateRegisterLetterAceptance = this.updateRegisterLetterAceptance.bind(this);
        this.updateClosePpp = this.updateClosePpp.bind(this);
        this.getViewStudentProfile = this.getViewStudentProfile.bind(this);
    }
    updateAssingAdvisor(req, res) {
        const { idPPP, advisorID } = req.params;
        const usecase = new assing_advisor_ppp_usecases_1.AssingAdvisorPppUseCase(res, this.pppRepository, idPPP, advisorID, this.userRepository);
        usecase.execute();
    }
    postcompanyPPP(req, res) {
        const createCompanyDto = req.body;
        const usecase = new use_cases_1.SaveCompanyUseCase(res, this.companyRepository, createCompanyDto, this.pppRepository);
        usecase.execute();
    }
    updateIntershipHours(req, res) {
        // const { idPPP} = req.params
        const { idPPP, intershipHours } = req.body;
        const usecase = new update_intership_hour_usecase_1.UpdateIntershipHourUseCase(res, this.pppRepository, idPPP, intershipHours);
        usecase.execute();
    }
    updateRegisterLetterAceptance(req, res) {
        const { id } = req.params;
        const payload = req.body;
        const usecase = new use_cases_1.RegisterLetterAceptanceUseCase(res, this.pppRepository, id, payload);
        usecase.execute();
    }
    updateClosePpp(req, res) {
        const { id } = req.params;
        const payload = req.body;
        const usecase = new use_cases_1.ClosePppUsecase(res, this.pppRepository, id, payload, this.studentRepository);
        usecase.execute();
    }
    getViewStudentProfile(req, res) {
        const { idPPP } = req.params;
        const usecase = new view_student_profile_usecase_1.ViewStudentProfileUseCase(res, this.companyRepository, this.documentRepository, this.userRepository, this.evaluationRepository, idPPP);
        usecase.execute();
    }
}
exports.PPPController = PPPController;
//# sourceMappingURL=ppp.controller.js.map