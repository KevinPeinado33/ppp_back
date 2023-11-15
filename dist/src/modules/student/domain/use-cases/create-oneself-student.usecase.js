"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneSelfStudentUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const dtos_1 = require("../dtos");
const jwt_1 = require("../../../../common/utils/jwt");
class CreateOneSelfStudentUseCase {
    constructor(response, studentRepository, userRepository, studentCreateDto, roleRepository) {
        this.response = response;
        this.studentRepository = studentRepository;
        this.userRepository = userRepository;
        this.studentCreateDto = studentCreateDto;
        this.roleRepository = roleRepository;
        this.HASH_SALT_MAX = 10;
    }
    async execute() {
        const { error } = dtos_1.StudentCreateOneSelfDto.schema.validate(this.studentCreateDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error
            });
        }
        try {
            const studentFound = await this.studentRepository.findOneByCode(this.studentCreateDto.code, false);
            if (!studentFound) {
                return (0, msg_response_1.message)({
                    response: this.response,
                    code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                    info: `Aún no estas autorizado para hacer tus practicas.`
                });
            }
            const newUser = await this.userRepository.create(this.studentCreateDto.user);
            newUser.password = await bcrypt_1.default.hash(newUser.password, this.HASH_SALT_MAX);
            newUser.status = true;
            const userCreated = await this.userRepository.save(newUser);
            studentFound.cycle = this.studentCreateDto.cycle;
            studentFound.nameCv = this.studentCreateDto.nameCv;
            studentFound.urlCv = this.studentCreateDto.urlCv;
            studentFound.user = userCreated;
            await this.studentRepository.save(studentFound);
            const roleSelected = 'ebeef04c-2e09-4da1-841a-4015d18aa968';
            const roleFound = await this.roleRepository.getRolById(roleSelected);
            await this.userRepository.saveRol(roleFound, userCreated);
            const token = await (0, jwt_1.generateKey)(newUser.id);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.OK,
                info: `Bienvenido ${userCreated.firstName}.`,
                data: token
            });
        }
        catch (error) {
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.INTERNAL_SERVER_ERROR,
                info: error
            });
        }
    }
}
exports.CreateOneSelfStudentUseCase = CreateOneSelfStudentUseCase;
//# sourceMappingURL=create-oneself-student.usecase.js.map