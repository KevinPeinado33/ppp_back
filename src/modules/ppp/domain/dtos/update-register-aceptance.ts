import Joi from "joi";

export class UpdateRegisterAceptanceDto{

  area!         : string
  startedDate!  : Date
  finishedDate! : Date

  constructor(){}

  static schema = Joi.object({

    area         : Joi.string().required(),
    startedDate  : Joi.date().required(),
    finishedDate : Joi.date().required()

  })

}