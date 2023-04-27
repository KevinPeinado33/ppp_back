import { Response } from 'express'

import { UserRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { LoginDto } from '../entities'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class LoginUseCase {
    
    constructor(
        private readonly response   : Response,
        private readonly loginDto   : LoginDto,
        private readonly repository : UserRepository
    ) { }

    async execute() {

        const userFound = await this.repository.findUserByEmail( this.loginDto.email )

        if ( !userFound )
            return message({
                response: this.response,
                code: CODE_STATUS.NOT_FOUND,
                info: 'No se encontró el usuario.'
            })

        delete userFound.password

        message({
            response: this.response,
            code: 201,
            data: {
                ...userFound,
                token: 'ESTO ES UN TOKEN PE'
            }
        })

    }

}
