import { Response } from 'express'

import { TypeDocumentRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class GetAllTypeDocumentsUseCase {

    constructor(
        private readonly response   : Response,
        private readonly repository : TypeDocumentRepository
    ) { }

    async execute() {
        
        try {

            const typesDocuments = await this.repository.findAll()

            if ( typesDocuments.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: 'No existen tipos de documentos aún.'
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: typesDocuments
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}