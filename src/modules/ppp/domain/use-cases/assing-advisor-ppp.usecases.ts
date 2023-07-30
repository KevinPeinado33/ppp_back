import { Response } from "express";
import { plainToClass } from "class-transformer";

import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { PPPRepository } from "../repositories";
import { UserRepository } from "../../../auth/domain/repositories";

export class AssingAdvisorPppUseCase {
  constructor(
    private readonly response: Response,
    private readonly repository: PPPRepository,
    private readonly pppID: string,
    private readonly advisorID: string,
    private readonly userRepository: UserRepository
  ) {}
  async execute() {
    try {
      const ppp = await this.repository.findOnebyId(this.pppID);

      if (!ppp) {
        return message({
          response: this.response,
          code: CODE_STATUS.NOT_FOUND,
          info: `No se encontro PPP con id #${this.pppID}.`,
        });
      }

      const userFound = await this.userRepository.findById(this.advisorID);

      if (!userFound) {
        return message({
          response: this.response,
          code: CODE_STATUS.BAD_REQUEST,
          info: `No se encontró usuario con id #${this.advisorID}`,
        });
      }
      
      ppp.advisor = userFound;

      this.repository.save(ppp)

      message({
        response: this.response,
        code: CODE_STATUS.OK,
        info: `Se asignó correctamente al sup. ${userFound.firstName}.`,
      });
    } catch (error) {
      message({
        response: this.response,
        code: CODE_STATUS.INTERNAL_SERVER_ERROR,
        info: error,
      });
    }
  }
}
