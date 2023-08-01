import { Response } from 'express';

import { message } from "../../../../common/responses/msg.response";
import { StudentRepository } from "../repositories";
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok';

export class findStudentsProcessOrEnd {

    constructor(
        private readonly response: Response,
        private readonly repository: StudentRepository,
        private readonly statusParams: number
    ) { }

    async execute() {
        try {
            const students = await this.repository.findStudentsProcessEnd(this.statusParams)

            if (this.statusParams == 0) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.OK,
                    data: students
                })

            } else {
                return message({
                    response: this.response,
                    code: CODE_STATUS.OK,
                    data: students
                })
            }

        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }
    }


}