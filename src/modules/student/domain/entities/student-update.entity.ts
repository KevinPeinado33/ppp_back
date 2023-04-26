import { IsString } from 'class-validator'
import { StudentCreateEntity } from './student-create.entity'

export class StudentUpdateEntity extends StudentCreateEntity { @IsString() _id!: string }
