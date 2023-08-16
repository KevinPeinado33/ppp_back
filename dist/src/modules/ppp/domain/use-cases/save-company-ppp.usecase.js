"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveCompanyUseCase = void 0;
const create_ppp_company_1 = require("../dtos/create-ppp-company");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../data/entities");
class SaveCompanyUseCase {
    constructor(response, repository, dtoCompany, pppRepository) {
        this.response = response;
        this.repository = repository;
        this.dtoCompany = dtoCompany;
        this.pppRepository = pppRepository;
    }
    async execute() {
        const { error } = create_ppp_company_1.CreateCompanyPPPDto.schema.validate(this.dtoCompany);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            const companyInstance = (0, class_transformer_1.plainToClass)(entities_1.CompanyEntity, this.dtoCompany);
            const newCompany = await this.repository.create(companyInstance);
            const foundPPP = await this.pppRepository.findOnebyId(this.dtoCompany.ppp);
            if (!foundPPP) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.NOT_FOUND,
                    info: `No existe PPP con id #${this.dtoCompany.ppp}.`
                });
            }
            newCompany.ppp = foundPPP;
            const companyPPPCreated = await this.repository.save(newCompany);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                data: companyPPPCreated
            });
            console.log(companyPPPCreated.name);
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
exports.SaveCompanyUseCase = SaveCompanyUseCase;
//# sourceMappingURL=save-company-ppp.usecase.js.map