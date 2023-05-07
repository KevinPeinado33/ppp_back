"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const entities_1 = require("../entities");
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
class CreateStudentUseCase {
    constructor(response, studentRepository, userRepository, studentCreateEntity) {
        this.response = response;
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
        this.studentCreateEntity = studentCreateEntity;
        this.HASH_SALT_MAX = 10;
    }
    async execute() {
        const { error } = entities_1.StudentCreateEntity.schema.validate(this.studentCreateEntity);
        if (error)
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        try {
            const salt = await bcrypt_1.default.genSalt(this.HASH_SALT_MAX);
            const password = await bcrypt_1.default.hash(this.studentCreateEntity.password, salt);
            const userEntity = { ...this.studentCreateEntity, password };
            const userCreated = await this.userRepository.create(userEntity);
            const studentCreated = await this.studentRepository.create({
                ...this.studentCreateEntity,
                user: userCreated._id
            });
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                data: studentCreated
            });
        }
        catch (error) {
            let info = String(error);
            if (String(error).includes('E11000'))
                info = 'Ya existe un estudiante con este codigo o dni.';
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info
            });
        }
    }
}
exports.CreateStudentUseCase = CreateStudentUseCase;
//# sourceMappingURL=create-student.usecase.js.map