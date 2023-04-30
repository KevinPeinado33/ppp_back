import { Document } from 'mongoose'

import { IUser } from '../../../auth/data/interfaces'

export interface IStudent extends Document {

    _id?           : string
    code           : string
    cycle          : string
    intershipHours : number
    nameCv         : string
    urlCv          : string 

    createdAt? : string
    updatedAt? : string

    /**
     * relations, in this case the relations is one by one
     * with the table Users
     */
    user: IUser['_id']

}