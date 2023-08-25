import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { Response } from "express";

export class ClosePppUsecase{

  constructor(
    private readonly response: Response,
  ){

  }

  async execute(){

    try {
      
    } catch (error) {
      message({
        response: this.response,
        code: CODE_STATUS.INTERNAL_SERVER_ERROR,
        info: error
      })
    }
  }
}