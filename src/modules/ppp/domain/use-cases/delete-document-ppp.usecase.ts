import { Response } from 'express'
import { message } from '../../../../common/responses/msg.response'
import { PPPDocumentsRepository } from '../repositories/ppp-documents.repository'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class DeleteDocumentPPPUsecas {
    
    constructor(
        private readonly response: Response,
        private readonly pppDocumentsRepository: PPPDocumentsRepository,
        private readonly idPPPDocument: string
    ){ }

    async execute() {

        try {

            const pppDocumentFound = await this.pppDocumentsRepository.findById(this.idPPPDocument)

            if (!pppDocumentFound) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                    info: 'Documento no encontrado'
                })
            }

            await this.pppDocumentsRepository.deleteById(pppDocumentFound.id)

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                info: 'Eliminado correctamente!'
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
