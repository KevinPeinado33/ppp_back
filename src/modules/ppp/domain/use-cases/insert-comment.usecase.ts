import { Response } from 'express'
import { plainToClass } from 'class-transformer'

import { CreateCommentDocumentDto } from '../dtos'
import { CommentDocumentRepository, PPPDocumentsRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { CommentDocumentEntity } from '../../data/entities'

export class InsertCommentUseCase {

    constructor(
        private readonly response   : Response,
        private readonly commentDto : CreateCommentDocumentDto,
        private readonly commentRepository: CommentDocumentRepository,
        private readonly idDocumentPPP: string,
        private readonly documentRepository: PPPDocumentsRepository
    ) { }

    async execute() {
       
        const { error } = CreateCommentDocumentDto.schema.validate( this.commentDto )
        
        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error
            })
        }

        try {

            const { statusDocument } = this.commentDto

            const documentFound = await this.documentRepository.findById( this.idDocumentPPP )

            if ( !documentFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: `No existe el documento con id #${ this.idDocumentPPP }`
                })
            }

            if ( statusDocument ) {
                
                documentFound.status = statusDocument

                this.documentRepository.save( documentFound )

            }

            const commentInstansed = plainToClass(CommentDocumentEntity, this.commentDto)
           
            const commentCreated = await this.commentRepository.create( commentInstansed )

            commentCreated.pppDocument = documentFound

            this.commentRepository.save( commentCreated )

            message({
                response: this.response,
                code: CODE_STATUS.CREATED,
                data: commentCreated
            })

        } catch ( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}