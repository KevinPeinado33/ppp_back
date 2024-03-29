import { Response }    from 'express'

interface MessageInterface {
    response : Response
    code     : number
    info?    : any
    data?    : any
}

export const message = ({
    response,
    code,
    info = 'ok',
    data
}: MessageInterface) => {
    return response.status( code ).json({
        info,
        data
    })
}
