import { Response } from 'express'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { StudentRepository } from '../repositories'
import { PPPRepository } from '../../../ppp/domain/repositories'

export class FindStudentUseCase {

    constructor(
        private readonly response     : Response,
        private readonly repository   : StudentRepository,
        private readonly pppRepository: PPPRepository,
        private readonly codeStudent  : string
    ) { }

    async execute () {
        
        try {

            const studentFound = await this.repository.findOneByCode( this.codeStudent )

            if ( !studentFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: `No existe estudiante con codigo #${ this.codeStudent }`
                })
            }
            
            const pppFound = await this.pppRepository.findLastOneWithCompanyByStudent( studentFound.code )

            if ( !pppFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No se encontró un PPP para estudiando con codigo #${ studentFound.code }`
                })
            }
            
            const { user, ...restStudent } = studentFound
            const { student, ...restPPP }  = pppFound

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: {
                    ...restStudent,
                    ...user,
                    ppp: restPPP
                }
            })

        } catch( error ) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}
