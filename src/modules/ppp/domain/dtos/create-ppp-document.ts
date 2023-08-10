import Joi from "joi"

export class CreatePPPDocumentDto{

    type!           :   string
    name!           :   string
    urlDocument!    :   string
    dateUpload!     :   Date
    status!         :   string
    ppp!            :   string

    constructor() { }

    static schema = Joi.object ({
        type:       Joi.string().required(),
        name:       Joi.string().required(),
        urlDocument:Joi.string().uri().required(),
        dateUpload: Joi.date().required(),
        status:     Joi.string().required(),
        ppp:        Joi.string().uuid().required()
    })
}