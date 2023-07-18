export class StudentImplRepository implements StudentRepository {

    constructor() { }

    async find(): Promise<IStudent[]> {
        return await StudentModel.find()
    }

    async create(createStudent: StudentCreateEntity): Promise<IStudent> {
        return await StudentModel.create( createStudent )
    }

    /* async update(updateStudent: StudentUpdateEntity): Promise<IStudent | null> {
        return await StudentModel.updateOne( updateStudent )
    } */

    async findByCode(codeStudent: string): Promise<IStudent | null> {
        return await StudentModel.findOne({ code: codeStudent })
    }

}