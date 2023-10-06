import Joi from 'joi'

export class CreateEvaluationDto{

    type!           : string
    createdAt!      : Date
    dateEnd!        : Date
    status?         : boolean
    directedTo!     : string
    ppp!            : string

    questions!      : IQuestionsAnswersDto[]

    constructor(){ }

    static schema = Joi.object({
        type                        :Joi.string().required(),
        createdAt                   :Joi.date(),
        dateEnd                     :Joi.date().required(),
        status                      :Joi.boolean(),
        directedTo                  :Joi.string().required(),
        ppp                         :Joi.string().uuid().required(),

        questions                   :Joi.array().items(

            Joi.object({
                question    :Joi.string().required(),
                evaluations :Joi.string().uuid(),
            })
        )
    })

}

interface IQuestionsAnswersDto{
    question    : string
    evaluations : string
}