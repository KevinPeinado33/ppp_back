import mongoose, { Schema } from 'mongoose'

import { IStudent } from '../interfaces'

const studentSchema = new Schema({
    code           : { type: String, require: true, unique: true },
    cycle          : { type: String, require: true },
    intershipHours : { type: Schema.Types.Number, require: true, default: 0 },
    nameCv         : { type: String, require: true },
    urlCv          : { type: String, require: true },
    user           : { type: Schema.Types.ObjectId, ref: 'User', require: true, unique: true }
}, {
    timestamps: true
})

studentSchema.index({ code: 1 }, { unique: true })

const Student = mongoose.model< IStudent >('Student', studentSchema)

export default Student
