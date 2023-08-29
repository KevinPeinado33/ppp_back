import Joi from "joi";

export class ClosePppDto{

  intershipHours! : number
  rate! : number
  status?: boolean

  constructor(){}

  static schema = Joi.object({
    intershipHours : Joi.number(),
    rate           : Joi.number(),
    status         : Joi.boolean()
  })

}