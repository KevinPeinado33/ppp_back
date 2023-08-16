import { Response } from 'express';

import { message } from "../../../../common/responses/msg.response";
import { StudentRepository } from "../repositories";
import { CODE_STATUS } from '../../../../common/responses/code/code-status.ok';

export class FindStudentsSemesterUseCase {

    constructor(
        private readonly response: Response,
        private readonly repository: StudentRepository,
        private readonly cycle: number
    ) { }

    async execute() {
        try {
            const students = await this.repository.findStudentsSemester(this.cycle)

            if (students.length === 0) {
                return message({
                    response: this.response,
                    code: CODE_STATUS.NOT_FOUND,
                    info: 'No hay estudiantes en este semestre'
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