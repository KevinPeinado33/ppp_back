import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import { message } from '../../responses/msg.response'
import { CODE_STATUS } from '../../responses/code/code-status.ok'

export const validateJWT = (req: Request, res: Response, next: Function) => {

    const token     = req.header('x-token')
    const secretKey = process.env.SECRET_KEY || ''

    if ( !token ) {
        return message({
            response: res,
            code: CODE_STATUS.UNAUTHORIZED,
            info: 'No hay token en la petición.'
        })
    }

    try {

        const { uuid }: any = jwt.verify( token, secretKey )

        if ( !uuid ) {
            return message({
                response: res,
                code: CODE_STATUS.UNAUTHORIZED,
                info: 'Token no valido, no existe un usuario.'
            })
        }

        next()

    } catch( error ) {
        message({
            response: res,
            code: CODE_STATUS.UNAUTHORIZED,
            info: 'Token no valido.'
        })
    }

}