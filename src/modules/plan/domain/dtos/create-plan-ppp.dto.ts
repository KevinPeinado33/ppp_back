import Joi from 'joi'

export class CreatePlanPPPDto {

    name!           : string
    intershipHours! : number
    startDate!      : Date
    endDate!        : Date
    bannerUrl!      : string[]
    status?         : boolean
    commited!       : string

    documents!      : IDocumentPlanPPPDto[]

    constructor() { }

    static schema = Joi.object({
        name:           Joi.string().required(),
        intershipHours: Joi.number().required(),
        startDate:      Joi.date(),
        endDate:        Joi.date().required(),
        bannerUrl:      Joi.array< string >().required(),
        status:         Joi.boolean(),
        commited:       Joi.string().uuid().required(),
        documents:      Joi.array().items(
            Joi.object({
                name: Joi.string().required(),
                urlDocument: Joi.string().required(),
                description: Joi.string().required(),
                status: Joi.boolean(),
                type: Joi.string().required(),
            })
        )
    })

}

interface IDocumentPlanPPPDto {
    name: string
    urlDocument: string
    description: string
    status?: boolean
    type: string
}
