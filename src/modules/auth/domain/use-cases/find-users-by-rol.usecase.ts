import { Response } from 'express'

import { UserRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class FindUsersByRolUseCase {

    constructor(
        private readonly response   : Response,
        private readonly repository : UserRepository,
        private readonly rolSearch  : string
    ) {

    }

    async execute() {
        
        try {

            const users = await this.repository.findByRol( this.rolSearch )

            if ( users.length === 0 ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No encontramos usuarios con rol #${ this.rolSearch }`
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: users
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
