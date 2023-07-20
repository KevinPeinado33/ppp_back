import Joi from 'joi'

export class CreatePlanPPPDto {

    name!           : string
    intershipHours! : number
    startDate!      : Date
    endDate!        : Date
    bannerUrl!      : string[]
    status?         : boolean
    commited!       : string

    constructor() { }

    static schema = Joi.object({
        name:           Joi.string().required(),
        intershipHours: Joi.number().required(),
        startDate:      Joi.date().required(),
        endDate:        Joi.date().required(),
        bannerUrl:      Joi.array< string >().required(),
        status:         Joi.boolean(),
        commited:       Joi.string().required(),
    })

}