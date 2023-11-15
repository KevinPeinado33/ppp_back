import { Response } from 'express'

import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { StudentRepository } from '../repositories'
import { PPPRepository } from '../../../ppp/domain/repositories'
import { UserRepository } from '../../../auth/domain/repositories'

export class GetProfileByIdUseCase {

    constructor(
        private readonly response     : Response,
        private readonly repository   : StudentRepository,
        private readonly userRepository: UserRepository,
        private readonly pppRepository: PPPRepository,
        private readonly idUser       : string
    ) { }

    async execute () {
        
        try {

            const codeStudent:any = await this.repository.findCodeStudenById( this.idUser )

            const studentFound = await this.repository.findOneByCode( codeStudent.student_code )

            if ( !studentFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: `No existe estudiante con codigo #${ codeStudent }`
                })
            }

            const { user, ...restStudent } = studentFound
            
            const pppFound = await this.pppRepository.findLastOneWithCompanyByStudent( studentFound.code )

            if ( !pppFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.OK,
                    data: {
                        ...restStudent,
                        ...user,
                    }
                })
            }

            const advisorPPP = await this.userRepository.findByIdPPP( pppFound.id )
            
            const { student, ...restPPP }  = pppFound

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: {
                    ...restStudent,
                    ...user,
                    ppp: { ...restPPP, advisor: { ...advisorPPP } }
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
