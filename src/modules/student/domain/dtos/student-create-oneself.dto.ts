import Joi from 'joi'

import { CreateUserDto } from '../../../auth/domain/dtos'

export class StudentCreateOneSelfDto {

    code!           : string
    cycle!          : number
    intershipHours? : number
    nameCv?         : string
    urlCv?          : string
    finalRate!      : number
    planPPP!        : string
    user!           : CreateUserDto

    constructor() { }

    static schema = Joi.object({
        code           : Joi.string().required(),
        cycle          : Joi.number().required(),
        intershipHours : Joi.number(),
        nameCv         : Joi.string(),
        urlCv          : Joi.string().uri(),
        finalRate      : Joi.number(),
        planPPP        : Joi.string(),
        user           : CreateUserDto.schema.required()
    })

}
