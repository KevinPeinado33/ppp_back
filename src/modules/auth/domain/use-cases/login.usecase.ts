import { Response } from 'express'
import bcrypt from 'bcrypt'

import { UserRepository } from '../repositories'
import { message } from '../../../../common/responses/msg.response'
import { LoginEntity } from '../entities'
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'
import { generateKey } from '../../../../common/utils/jwt/generate.jwt'

export class LoginUseCase {
    
    constructor(
        private readonly response    : Response,
        private readonly loginEntity : LoginEntity,
        private readonly repository  : UserRepository
    ) { }

    async execute() {

        const { error } = LoginEntity.schema.validate( this.loginEntity )

        if ( error ) {
            return message({
                response: this.response,
                code: CODE_STATUS.BAD_REQUEST,
                info: error.message
            })
        }

        try {

            const userFound = await this.repository.findUserByEmail( this.loginEntity.username )

            if ( !userFound ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `El usuario ${ this.loginEntity.username }, no se ha encontrado.`
                })
            }
                
            const isPasswordCorrect = await bcrypt.compare( this.loginEntity.password, userFound.password! )

            if ( !isPasswordCorrect ) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.BAD_REQUEST,
                    info: 'Contraseña incorrecta.'
                })
            }

            const token = await generateKey( userFound._id! )

            delete userFound.password

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: {
                    ...userFound.toObject(),
                    token
                }
            })

        } catch(error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}
