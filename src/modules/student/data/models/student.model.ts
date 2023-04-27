import mongoose, { Schema } from 'mongoose'

import { IStudent } from '../interfaces'

const studentSchema = new Schema({
    code:      { type: String, require: true, unique: true },
    firstName: { type: String, require: true },
    lastName:  { type: String, require: true },
    cycle:     { type: Schema.Types.Number, require: true },
    academySchool: { type: String, require: true },
    dni:       { type: String, require: true, unique: true }
}, {
    timestamps: true
})

studentSchema.index({ code: 1 }, { unique: true })

const Student = mongoose.model< IStudent >('Student', studentSchema)

export default Student
