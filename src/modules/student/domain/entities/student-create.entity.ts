import Joi from 'joi'

export class StudentCreateEntity {
    
    code!           : string
    cycle!          : string
    nameCv!         : number
    urlCv!          : string
    dni!            : string
    username!       : string
    password!       : string
    firstName!      : string
    lastName!       : string
    faculty!        : string
    schoolName!     : string
    email!          : string
    cellphone!      : string
    role!           : string
    user?           : string

    constructor() { }

    static schema = Joi.object({
        code       : Joi.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required(),
        cycle      : Joi.string().required(),
        nameCv     : Joi.string().required(),
        urlCv      : Joi.string().required(),  
        dni        : Joi.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required(),
        username   : Joi.string().required(),
        password   : Joi.string().required(),
        firstName  : Joi.string().required(),
        lastName   : Joi.string().required(),
        faculty    : Joi.string().required(),
        schoolName : Joi.string().required(),
        email      : Joi.string().required(),
        cellphone  : Joi.string().pattern(/^[0-9]+$/, 'Solo se acepta numeros').required(),
        role       : Joi.string().required(),
    })

}
