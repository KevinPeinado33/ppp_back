import Joi from 'joi'

export class CreatePlanDocumentDto {

    name!        : string
    documentB64! : string
    description! : string
    status?      : boolean
    type!        : string
    planPPP!     : string

    constructor() { }

    static schema = Joi.object({
        name:        Joi.string().required(),
        documentB64: Joi.string().base64().required(),
        description: Joi.string().required(),
        status:      Joi.boolean(),
        type:        Joi.string().uuid().required(),
        planPPP:     Joi.string().uuid().required()
    })

}