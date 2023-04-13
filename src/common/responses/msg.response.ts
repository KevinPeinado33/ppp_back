import { Response }    from 'express'

interface MessageInterface {
    response : Response
    code     : number
    info?    : string
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
