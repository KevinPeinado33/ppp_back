import Joi from 'joi'

export class LoginEntity {
    
    username! : string
    password! : string

    constructor() { }

    static schema = Joi.object({
        username : Joi.string().required(),
        password : Joi.string().required()
    })

}
