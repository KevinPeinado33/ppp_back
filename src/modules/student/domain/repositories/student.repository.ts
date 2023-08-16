import { StudentEntity } from '../../data/entities'

export abstract class StudentRepository { 

    abstract getAllStudents(planPPP: string)           : Promise< StudentEntity[] >
    abstract findStudentsSemester(cycle: number)       : Promise< StudentEntity[] >
    abstract findStudentsProcessEnd(finalRate: number) : Promise< StudentEntity[] >
    abstract save(student: StudentEntity)              : Promise< StudentEntity >
    abstract findOneByCode(codeStudent: string, withRelation?: boolean): Promise< StudentEntity | null >
    
}
