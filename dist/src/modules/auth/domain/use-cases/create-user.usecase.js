"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const msg_response_1 = require("../../../../common/responses/msg.response");
const code_status_ok_1 = require("../../../../common/responses/code/code-status.ok");
const dtos_1 = require("../dtos");
class CreateUserUseCase {
    constructor(response, createUserDto, repository, rolRepository) {
        this.response = response;
        this.createUserDto = createUserDto;
        this.repository = repository;
        this.rolRepository = rolRepository;
        this.HASH_SALT_MAX = 10;
    }
    async execute() {
        const { error } = dtos_1.CreateUserDto.schema.validate(this.createUserDto);
        if (error) {
            return (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.BAD_REQUEST,
                info: error.message
            });
        }
        try {
            let roleSelected = '';
            const newUser = await this.repository.create(this.createUserDto);
            newUser.password = await bcrypt_1.default.hash(newUser.password, this.HASH_SALT_MAX);
            const userCreated = await this.repository.save(newUser);
            if (!this.createUserDto.rolId) {
                roleSelected = '3ecd30a8-837d-42a7-86b7-7a4ffe115371';
            }
            else {
                roleSelected = this.createUserDto.rolId;
            }
            const roleFound = await this.rolRepository.getRolById(roleSelected);
            await this.repository.saveRol(roleFound, userCreated);
            (0, msg_response_1.message)({
                response: this.response,
                code: code_status_ok_1.CODE_STATUS.CREATED,
                info: 'Usuario creado correctamente.'
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
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=create-user.usecase.js.map