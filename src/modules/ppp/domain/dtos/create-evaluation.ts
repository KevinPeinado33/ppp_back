import Joi from 'joi'

export class CreateEvaluationDto{

    type!: string
    score!: string
    observationAdvisor!: string
    observationBusinessMentor!: string
    createdAt!: Date
    dateEnd!: Date
    status?: boolean
    directedTo!: string
    numberAttempts!: number
    ppp!: string

    constructor(){ }

    static schema = Joi.object({
        type                        :Joi.string().required(),
        score                       :Joi.string().required(),
        observationAdvisor          :Joi.string(),
        observationBusinessMentor   :Joi.string(),
        createdAt                   :Joi.date().required(),
        dateEnd                     :Joi.date().required(),
        status                      :Joi.boolean(),
        directedTo                  :Joi.string().required(),
        numberAttempts              :Joi.number(),
        ppp                         :Joi.string().uuid().required()
    })

}