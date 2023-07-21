"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    /* private studentRepository : StudentRepository
    private userRepository    : UserRepository */
    constructor() {
        /* this.studentRepository = new StudentImplRepository()
        this.userRepository    = new UserImplRepository() */
        this.postCreate = this.postCreate.bind(this);
        this.getOneByCode = this.getOneByCode.bind(this);
        this.getAll = this.getAll.bind(this);
    }
    postCreate(request, response) {
        /* const studentCreate = request.body as StudentCreateEntity
        
        const usecase       = new CreateStudentUseCase(
            response,
            this.studentRepository,
            this.userRepository,
            studentCreate
        )

        usecase.execute() */
    }
    getOneByCode(request, response) { }
    getAll(request, response) {
        /* const usecase = new GetAllStudentUseCase(
            response,
            this.studentRepository
        )

        usecase.execute() */
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map