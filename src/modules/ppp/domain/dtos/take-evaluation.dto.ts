import Joi from "joi"

export class TakeEvaluationDto{
    
    score!                      :number
    observationAdvisor!         :string
    observationBusinessMentor!  :string
    status!                     :boolean
    numberAttempts!             :number

    answers!                    :IQAnswersDto[]

    constructor(){}

    static schema = Joi.object({
        score                       :Joi.number(),
        observationAdvisor          :Joi.string(),
        observationBusinessMentor   :Joi.string(),
        status                      :Joi.boolean(),
        numberAttempts              :Joi.number(),
        
        answers                     :Joi.array().items(

            Joi.object({
                id          :Joi.string().uuid().required(),
                answer      :Joi.string(),
                puntuation  :Joi.number()
            })
        )
    })

}

interface IQAnswersDto{
    id         :string
    answer     :string
    puntuation :number
}