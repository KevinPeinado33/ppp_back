import { Response } from "express";
import { CompanyRepositroy, PPPRepository } from "../repositories";
import { CreateCompanyPPPDto } from "../dtos/create-ppp-company";
import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { plainToClass } from "class-transformer";
import { CompanyEntity } from "../../data/entities";

export class SaveCompanyUseCase{

    constructor(
        private readonly response : Response,
        private readonly repository : CompanyRepositroy,
        private readonly dtoCompany: CreateCompanyPPPDto,
        private readonly pppRepository: PPPRepository
    ){}

    async execute(){

        const { error } = CreateCompanyPPPDto.schema.validate( this.dtoCompany )

        if(error){
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try{

            const companyInstance = plainToClass(CompanyEntity, this.dtoCompany)
            const newCompany = await this.repository.create(companyInstance)

            /* const foundPPP = await this.pppRepository.findOnebyId(this.dtoCompany.ppp)

            if(!foundPPP){

                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existe PPP con id #${this.dtoCompany.ppp}.`
                })
            }

            newCompany.ppp = foundPPP */

            const companyPPPCreated = await this.repository.create(newCompany)

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: companyPPPCreated 
            })

            console.log(companyPPPCreated.name)

        }catch(error){
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }
}