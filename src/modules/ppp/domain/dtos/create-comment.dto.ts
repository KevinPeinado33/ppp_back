import Joi from 'joi'

export type StatusDocumentPPP = 
    | 'en espera'
    | 'aceptado'
    | 'rechazado'
    | 'observaciones'

export class CreateCommentDocumentDto {

    comment!       : string
    statusDocument!: StatusDocumentPPP 

    static schema = Joi.object({
        comment       : Joi.string().optional(),
        statusDocument: Joi.string().optional()
    })

}
