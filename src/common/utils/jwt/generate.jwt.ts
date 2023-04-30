import jwt from 'jsonwebtoken'

export const generateKey = ( uuid: string ) => {
    
    return new Promise(( resolve, reject ) => {
        
        const secretKey = process.env.SECRET_KEY || ''
        const payload   = { uuid }

        jwt.sign(
            payload,
            secretKey,
            { expiresIn: '24h' },
            ( error, token ) => {
                
                if ( error ) {
                    reject('No se pudo generar el token.')
                    return
                }
                
                resolve(token)

            }
        )

    })

}
