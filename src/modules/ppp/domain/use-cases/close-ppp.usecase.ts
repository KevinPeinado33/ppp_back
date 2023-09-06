import { Response } from "express";

import { message } from "../../../../common/responses/msg.response";
import { CODE_STATUS } from "../../../../common/responses/code/code-status.ok";
import { PPPRepository } from "../repositories";
import { ClosePppDto } from "../dtos/close-ppp";
import Joi from "joi";
import { StudentRepository } from "../../../student/domain/repositories";

export class ClosePppUsecase {

  private MAX_HOURS_PPP = 700

  constructor(
    private readonly response: Response,
    private readonly repository: PPPRepository,
    private readonly idPpp: string,
    private readonly closePppDto: ClosePppDto,
    private readonly studenRepository: StudentRepository
  ) {}

  async execute() {
    
    const { error } = ClosePppDto.schema.validate(this.closePppDto);
    
    if (error) {
      return message({
        response: this.response,
        code: CODE_STATUS.BAD_REQUEST,
        info: error.message
      });
    }

    try {

      let notasAcum = 0
      let hoursAcum = 0

      const pppFound = await this.repository.findOnebyId(this.idPpp);

      if(!pppFound){
        return message({
          response : this.response,
          code: CODE_STATUS.NOT_FOUND,
          info: `No se encontró el ppp con id #${ this.idPpp }`
        })
      }

      const ratedAndHoursFound = await this.studenRepository.getRatesAndIntershipHoursById( this.closePppDto.studentID )
      
      /**
       * Si tiene otros ppps el estudiante me va a traer todas las notas y horas acumuladas
       */
      if ( ratedAndHoursFound ) {

        for ( const x of ratedAndHoursFound ) {

          notasAcum = notasAcum + Number(x.get("rate"))!
          hoursAcum = hoursAcum + Number(x.get("hours"))!
          
        }
        
        notasAcum = notasAcum + this.closePppDto.rate
        hoursAcum = hoursAcum + this.closePppDto.intershipHours

        notasAcum = notasAcum / ratedAndHoursFound.length

        console.log({lennn:ratedAndHoursFound})

        pppFound.intershipHours = hoursAcum
        
      } else {
        pppFound.intershipHours = this.closePppDto.intershipHours
      }
      
      const isHoursCompleted = pppFound.intershipHours >= this.MAX_HOURS_PPP
      
      pppFound.rate = this.closePppDto.rate
    
      pppFound.status = !isHoursCompleted;

      this.repository.save( pppFound )

      if (isHoursCompleted) {

        const studentFound = await this.studenRepository.findOneByCode( this.closePppDto.studentID )

        if (!studentFound) return

        studentFound.finalRate = notasAcum
        studentFound.intershipHours = hoursAcum

        
        this.studenRepository.save(studentFound)
        
      }
      console.log({notasAcum})
      console.log({hoursAcum})

      message({
        response: this.response,
        code: CODE_STATUS.OK,
        info: 'Acabas de cerrar tu ppp',
        data: pppFound
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
