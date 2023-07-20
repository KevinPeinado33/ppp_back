import Joi from 'joi'

export class CreateQuestionEvaluationDto {

    question! : string
    status?   : boolean
    type!     : string
    area!     : string

    constructor() { }

    static schema = Joi.object({
        question : Joi.string().required(),
        status   : Joi.boolean(),
        type     : Joi.string().valid('incio', 'intermedio', 'fin').required(),
        area     : Joi.string().required()
    })

}