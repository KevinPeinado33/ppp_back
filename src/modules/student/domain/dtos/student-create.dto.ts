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
        intershipHours: Joi.number().required(),
        nameCv: Joi.string().required(),
        urlCv: Joi.string().uri().required(),
        finalRate: Joi.number().required(),
        planPPP: Joi.string().required(),
        userId: Joi.string().required(),
    })

}
