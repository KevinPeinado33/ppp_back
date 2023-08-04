import { AppDataSource } from '../../../../config/database'

import { StudentRepository } from '../../domain/repositories'
import { StudentEntity } from '../entities'

export class StudentRepositoryImpl implements StudentRepository {

    private STUDENT_PROCESS_END = 0

    private readonly repository = AppDataSource.getRepository( StudentEntity )

    constructor() { }    
    
    async getAllStudents(planPPP: string): Promise< StudentEntity[] > {
        return await this.repository.findBy({ planPPP })
    }

    async save(student: StudentEntity): Promise<StudentEntity> {
        return await this.repository.save( student )
    }

    async findStudentsSemester(cycle: number): Promise<StudentEntity[]> {
        return await this.repository.findBy({ cycle })
    }

    async findStudentsProcessEnd(finalRate:number): Promise<StudentEntity[]> {
    
        const studentQry = this.repository.createQueryBuilder('student')

        if ( finalRate === this.STUDENT_PROCESS_END ) {
            studentQry.where('student.final_rate <> 0')
        }

        if ( finalRate !== this.STUDENT_PROCESS_END ) {
            studentQry.where('student.final_rate = 0')
        }

        studentQry.innerJoinAndSelect('student.user', 'user')

        return await studentQry.getMany()

    }

    async findOneByCode(codeStudent: string, withRelation: boolean = true ): Promise<StudentEntity | null> {
        
        if ( withRelation ) {
            return await this
                            .repository
                            .findOne({ 
                                where: { code: codeStudent },
                                relations: ['user']
                            })
        }

        return await this.repository.findOneBy({ code: codeStudent })

    }

}