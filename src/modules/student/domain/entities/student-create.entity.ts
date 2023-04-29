import Joi from 'joi'

export class StudentCreateEntity {
    
    code!         : string
    firstName!    : string
    lastName!     : string
    cycle!        : number
    academySchool!: string
    dni!          : string

    constructor() { }

    static schema = Joi.object({
        code:          Joi.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required(),
        firstName:     Joi.string().required(),
        lastName:      Joi.string().required(),
        cycle:         Joi.number().required(),
        academySchool: Joi.string().required(),
        dni:           Joi.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required()
    })

}
