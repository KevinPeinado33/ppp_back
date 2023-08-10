import Joi from "joi";

export class NotificationsDto {

    property!: string
    title!: string
    message!: string
    share!: string[]

    constructor() { }

    static schema = Joi.object({

        property: Joi.string().required(),
        title: Joi.string().required(),
        message: Joi.string().required(),
        share: Joi.array().items(Joi.string().uuid()).required()
    })

}