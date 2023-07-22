import Joi from 'joi'

export class CreateUserDto {

    userName!    : string
    password!    : string
    firstName!   : string
    lastName!    : string
    email!       : string
    cellphone!   : string
    area!        : string
    numStudents? : number
    urlProfile!  : string
    status?      : boolean

    constructor() { }

    static schema = Joi.object({
        userName    : Joi.string().required(),
        password    : Joi.string().required(),
        firstName   : Joi.string().required(),
        lastName    : Joi.string().required(),
        email       : Joi.string().email().required(),
        cellphone   : Joi.string().pattern(/^[0-9]{9}$/).message('Número de telefono no valido.').required(),
        area        : Joi.string().required(),
        numStudents : Joi.number(),
        urlProfile  : Joi.string().uri().required(),
        status      : Joi.boolean()
    })

}
