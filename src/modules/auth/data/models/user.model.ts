import mongoose, { Schema, model, Model } from 'mongoose'

import { IUser } from '../interfaces'

const userSchema = new Schema({
    fullName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: {
        type: String,
        enum: {
            values: [ 'admin', 'student' ],
            message: '{VALUE} no es un rol valido',
            default: 'client',
            required: true
        }
    }
},{
    timestamps: true
})

const User: Model< IUser > = mongoose.models.User || model('User', userSchema)

export default User
