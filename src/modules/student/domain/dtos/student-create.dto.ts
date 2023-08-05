import Joi from 'joi'

export class StudentCreateDto {

    code!: string
    cycle!: number
    intershipHours!: number
    nameCv!: string
    urlCv!: string
    finalRate!: number
    planPPP!: string
    userId!: string

    constructor() { }

    static schema = Joi.object({
        code: Joi.string().required(),
        cycle: Joi.number().required(),
        intershipHours: Joi.number(),
        nameCv: Joi.string(),
        urlCv: Joi.string().uri(),
        finalRate: Joi.number(),
        planPPP: Joi.string().required(),
        userId: Joi.string(),
    })

}
