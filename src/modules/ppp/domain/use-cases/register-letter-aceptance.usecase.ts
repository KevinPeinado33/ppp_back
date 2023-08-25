import { Response } from 'express'
import { PPPRepository } from '../repositories';
import { UpdateRegisterAceptanceDto } from '../dtos/update-register-aceptance';
import { message } from '../../../../common/responses/msg.response';
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok';

export class RegisterLetterAceptanceUseCase{

  constructor(
    private readonly response   : Response,
    private readonly repository : PPPRepository,
    private readonly idPpp      : string,
    private readonly registerLetterAceptanceDto: UpdateRegisterAceptanceDto
  ){}

  async execute(){

    const { error } = UpdateRegisterAceptanceDto.schema.validate(this.registerLetterAceptanceDto)

    if( error ){
      return message({
          response: this.response,
          code: CODE_STATUS.BAD_REQUEST,
          info: error.message
      })
    }

    try {

      const foundRegister = await this.repository.findOnebyId(this.idPpp)

      if(!foundRegister){
        return message({
          response: this.response,
          code: CODE_STATUS.NOT_FOUND,
          info: `No se encontro ninguna carta`
        })
      }
      
      // actulizar campos pe crrano
      foundRegister.area = this.registerLetterAceptanceDto.area
      foundRegister.startedDate = this.registerLetterAceptanceDto.startedDate
      foundRegister.finishedDate = this.registerLetterAceptanceDto.finishedDate
      
      console.log({ foundRegister })

      this.repository.save(foundRegister)

      message({
        response: this.response,
        code: CODE_STATUS.OK,
        info: `Se registro con exito la carta`
      })
    } catch (error) {
      message({
        response: this.response,
        code: CODE_STATUS.INTERNAL_SERVER_ERROR,
        info: error
      })
    }
  }
}