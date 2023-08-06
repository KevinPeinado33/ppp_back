import Joi from "joi";

export class CreateCompanyPPPDto {

    name!: string
    area!: string
    ruc!: string
    address!: string
    bussinessMentor!: string
    dniMentor!: string
    cellphoneMentor!: string
    emailMentor!: string
    academicDegreeMentor!: string
    status?: boolean
    ppp!: string

    constructor() { }

    static schema = Joi.object({

        name: Joi.string().required(),
        area: Joi.string().required(),
        ruc: Joi.string().required(),
        address: Joi.string().required(),
        bussinessMentor: Joi.string().required(),
        dniMentor: Joi.string().required(),
        cellphoneMentor: Joi.string().required(),
        emailMentor: Joi.string().required(),
        academicDegreeMentor: Joi.string().required(),
        status: Joi.boolean().required(),
        ppp: Joi.string().uuid().required()

    })

}