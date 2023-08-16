import { Response } from 'express'

import { message } from "../../../../common/responses/msg.response"
import { StudentRepository } from "../repositories"
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok'

export class FindStudentsProcessOrEnd {

    private STUDENT_PROCESS_END = 0

    constructor(
        private readonly response: Response,
        private readonly repository: StudentRepository,
        private readonly statusParams: number
    ) { }

    async execute() {
        
        try {

            /**
             * 0 = terminado
             * 1 = proceso
             */
            const students = await this.repository.findStudentsProcessEnd(this.statusParams)

            if (students.length === 0) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: `No existé aún estudiantes en: ${ ( this.statusParams === this.STUDENT_PROCESS_END ? 'Terminado' : 'Proceso ') }`
                })
            }

            message({
                response: this.response,
                code: CODE_STATUS.OK,
                data: students
            })

        } catch (error) {
            message({
                response: this.response,
                code: CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            })
        }

    }

}