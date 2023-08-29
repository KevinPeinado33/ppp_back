import { Response } from "express";

import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { PPPRepository } from "../repositories";
import { ClosePppDto } from "../dtos/close-ppp";

export class ClosePppUsecase {
  constructor(
    private readonly response: Response,
    private readonly repository: PPPRepository,
    private readonly idPpp: string,
    private readonly closePppDto : ClosePppDto
  ) {}

  async execute() {

    const { error } = ClosePppDto.schema.validate(this.closePppDto);

    if (error) {
      return message({
        response: this.response,
        code: CODE_STATUS.BAD_REQUEST,
        info: error.message,
      });
    }
    try {
      
      const foundClose = await this.repository.findOnebyId(this.idPpp)

      if(!foundClose){
        return message({
          response: this.response,
          code: CODE_STATUS.NOT_FOUND,
          info: `No se puedo cerrar su PPP`
        })
      }

      foundClose.intershipHours = this.closePppDto.intershipHours
      foundClose.rate = this.closePppDto.rate
      foundClose.status = this.closePppDto.status!

      this.repository.save(foundClose)

      message({
        response: this.response,
        code: CODE_STATUS.OK,
        info: `Se cerro con exito su PPP`
      })

    } catch (error) {
      message({
        response: this.response,
        code: CODE_STATUS.INTERNAL_SERVER_ERROR,
        info: error,
      });
    }
  }
}
