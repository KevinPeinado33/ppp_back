import { Document } from 'mongoose'

export interface IUser extends Document {

    _id          : string
    dni          : string
    username     : string
    password?    : string
    firstName    : string
    lastName     : string
    faculty?     : string
    schoolName?  : string
    email        : string
    cellphone    : string
    area?        : string
    numStudents? : string
    role         : string
    
    createdAt? : string
    updatedAt? : string
}
