"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewStudentProfileUseCase = void 0;
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class ViewStudentProfileUseCase {
    constructor(response, companyRepo, documentsRepos, userRepos, evaluationRepos, idPPP) {
        this.response = response;
        this.companyRepo = companyRepo;
        this.documentsRepos = documentsRepos;
        this.userRepos = userRepos;
        this.evaluationRepos = evaluationRepos;
        this.idPPP = idPPP;
    }
    async execute() {
        try {
            // TODO: traer la empresa para la cual trabaja
            const companiesFound = await this.companyRepo.getCompaniesByidPPP(this.idPPP);
            // TODO: traer los documentos regstrados en el ppp
            const documentsFound = await this.documentsRepos.getDocumentsByPPP(this.idPPP);
            // TOOO: traer sus supervior econtrado
            const advisorFound = await this.userRepos.findByIdPPP(this.idPPP);
            // TODO: traer las evaluaciones hechas
            const evaluationsFound = await this.evaluationRepos.getEvaluationsByPPP(this.idPPP);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: {
                    company: companiesFound,
                    documents: documentsFound,
                    advisor: advisorFound,
                    evaluatons: evaluationsFound
                }
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
        }
    }
}
exports.ViewStudentProfileUseCase = ViewStudentProfileUseCase;
//# sourceMappingURL=view-student-profile.usecase.js.map