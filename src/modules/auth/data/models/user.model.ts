import mongoose, { Schema, model, Model } from 'mongoose'

import { IUser } from '../interfaces'

const userSchema = new Schema({
    dni        : { type: String, require: true, unique: true },
    username   : { type: String, require: true, unique: true },
    password   : { type: String, require: true },
    firstName  : { type: String, require: true },
    lastName   : { type: String, require: true },
    faculty    : { type: String, require: false },
    schoolName : { type: String, require: true },
    email      : { type: String, require: true, unique: true },
    cellphone  : { type: String, require: true },
    area       : { type: String, require: false },
    numStudents: { type: Schema.Types.Number, require: false },
    role       : {
        type: String,
        enum: {
            values: [ 'comite', 'supervisor', 'practicante' ],
            message: '{VALUE} no es un rol valido',
            default: 'practicante',
            required: true
        }
    }
},{
    timestamps: true
})

userSchema.index({ dni: 1 }, { unique: true })
userSchema.index({ username: 1 }, { unique: true })

const User: Model< IUser > = mongoose.models.User || model('User', userSchema)

export default User
