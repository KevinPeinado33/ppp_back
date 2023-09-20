import Joi from "joi";

export class ClosePppDto{

  studentID!      : string
  intershipHours! : number
  rate! : number
  status?: boolean

  constructor(){}

  static schema = Joi.object({
    studentID      : Joi.string().required(),
    intershipHours : Joi.number().required(),
    rate           : Joi.number().required(),
    status         : Joi.boolean()
  })

}