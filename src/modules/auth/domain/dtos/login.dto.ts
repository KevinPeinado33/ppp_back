import Joi from 'joi'

export class LoginDto {
    
    userName! : string
    password! : string

    constructor() { }

    static schema = Joi.object({
        userName : Joi.string().required(),
        password : Joi.string().required()
    })

}
