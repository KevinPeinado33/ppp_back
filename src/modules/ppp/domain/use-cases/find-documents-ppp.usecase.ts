import { Response } from 'express'

import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { message } from "../../../../common/responses/msg.response";
import { PPPDocumentsRepository } from "../repositories";

export class FindDocumentsPPPUseCase{

    constructor(
        private readonly response   : Response,
        private readonly repository : PPPDocumentsRepository,
        private readonly idPPP      : string
    ){ }

    async execute(){
        try {

            const documentsFound = await this.repository.getDocumentsByPPP( this.idPPP )

            if ( documentsFound.length === 0 ){
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No se encontraron documentos con el PPP #${ this.idPPP }.`
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: documentsFound
            })
            
        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
    }
}