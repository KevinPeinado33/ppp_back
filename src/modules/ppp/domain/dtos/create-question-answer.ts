import Joi from 'joi'

export class CreateQuestionAnswerDto{

    question!: string
    answer!: string
    puntuation!: string
    evaluations!: string

    constructor() { }

    static schema = Joi.object({
        question       :Joi.string().required(),
        answer         :Joi.string().required(),
        puntuation     :Joi.string().required(),
        evaluations    :Joi.string().uuid().required()
    })
}