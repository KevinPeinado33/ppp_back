import Joi from 'joi'

export class CreateAreaPlanDto {
    
    name!        : string
    description! : string
    status?      : boolean
    plan!        : string

    constructor() { }

    static schema = Joi.object({
        name        : Joi.string().required(),
        description : Joi.string().required(),
        status      : Joi.boolean(),
        plan        : Joi.string().uuid().required()
    })

}