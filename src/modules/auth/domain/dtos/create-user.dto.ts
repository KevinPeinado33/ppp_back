import Joi from 'joi'

export class CreateUserDto {

    dni!         : string
    userName!    : string
    password!    : string
    firstName!   : string
    lastName!    : string
    email!       : string
    cellphone!   : string
    area!        : string
    numStudents? : number
    urlProfile?  : string
    status?      : boolean

    constructor() { }

    static schema = Joi.object({
        dni:         Joi.string().required(),
        userName:    Joi.string().required(),
        password:    Joi.string().required(),
        firstName:   Joi.string().required(),
        lastName:    Joi.string().required(),
        email:       Joi.string().required(),
        cellphone:   Joi.string().required(),
        area:        Joi.string().required(),
        numStudents: Joi.number(),
        urlProfile:  Joi.string().required(),
        status:      Joi.boolean(),
    })
}
