import { StudentEntity } from '../../data/entities'

export abstract class StudentRepository { 

    abstract getAllStudents(planPPP: string)    : Promise< StudentEntity[] >
    abstract save(student: StudentEntity)       : Promise< StudentEntity >

}
