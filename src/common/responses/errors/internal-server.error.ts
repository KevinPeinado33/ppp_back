import { Response } from 'express'

import { message } from '../msg.response'

export class InternalServerErrorException {

    constructor(
        private response : Response,
        private message  : string
    ) {
        this.response = response
    }

    execute() {
        message({
            response : this.response,
            code     : 500,
            info     : this.message
        })
    }
}
