import { Response } from 'express'

import { message } from '../msg.response'

export class NotFoundException {

    constructor(
        private response : Response,
        private message  : string
    ) {
        this.response = response
    }

    execute() {
        message({
            response : this.response,
            code     : 404,
            info     : this.message
        })
    }
}
