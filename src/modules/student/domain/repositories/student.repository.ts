import { StudentEntity } from '../../data/entities'

export abstract class StudentRepository { 

    // TODO: buscarlos por plan academico
    abstract getAllStudents(): Promise< StudentEntity[] >

}
